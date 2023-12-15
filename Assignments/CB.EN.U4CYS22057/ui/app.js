const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const path = require('path'); 
const multer = require('multer');
const { inflateSync } = require('zlib');
const { error } = require('console');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'session-signing-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'user',
    database: 'sem_project',
});

app.use(express.static(path.join(__dirname)));
app.post('/authenticate', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT id,passwd,advisor FROM details WHERE id = ? AND passwd = ?`;

    db.query(query, [username, password], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ success: false });
            return;
        }

        if (result.length > 0) {
            req.session.username = username;
            res.cookie('username', username);
            res.json({
                success: true,
                advisor: result[0].advisor,
            });
        } else {
            res.json({ success: false });
        }
    });
});

app.post('/change_Password', (req, res) => {
    const { user, password, new_password } = req.body;
    const query = 'SELECT passwd FROM details WHERE id = ?';
    
    db.query(query, [user], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ success: false });
        }
        
        if (result.length > 0) {
            const current_passwd = result[0].passwd;

            if (current_passwd === password) {
                const updateQuery = 'UPDATE details SET passwd = ? WHERE id = ?';

                db.query(updateQuery, [new_password, user], (err, updateResult) => {
                    if (err) {
                        console.error('Database error:', err);
                        return res.status(500).json({ success: false });
                    }

                    if (updateResult.affectedRows > 0) {
                        return res.json({ success: true });
                    } else {
                        return res.status(404).send('Request not found');
                    }
                });
            } else {
                return res.json({ success: false, message: 'Incorrect password' });
            }
        } else {
            return res.json({ success: false, message: 'User not found' });
        }
    });
});


app.get('/changePassword', (req, res) => { 
    res.sendFile(path.join(__dirname, 'html', 'changePassword.html'));
});

app.get('/home', (req, res) => { 
    if (req.session.username) {
        res.sendFile(path.join(__dirname, 'html', 'home.html'));
    } else {
        res.redirect('/');
    }
});

app.get('/advisor', (req, res) => {
    if (req.session.username) {
        res.sendFile(path.join(__dirname, 'html', 'advisor.html'));
    } else {
        res.redirect('/');
    }
});

app.get('/forgotPassword', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'forgotPassword.html'));
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.clearCookie('username');
    res.redirect('/');
});

app.post('/request', upload.single('file'), (req, res) => {
    const requestData = req.body;
    const fileData = req.file;

    const fileContent = fileData ? fileData.buffer : null;
    const query = `INSERT INTO requests (user_id, type, from_date, to_date, fslot, tslot, description, file, sub_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`

    db.query(query, [
        requestData.user,
        requestData.type,
        requestData.from_date,
        requestData.to_date,
        requestData.fslot,
        requestData.tslot,
        requestData.description,
        fileContent,
        requestData.subtype,
        ], (err,result) =>{
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
            return;
        }
        else{
            res.json({ success: true});
        }
    });
});

app.post('/get_user', (req, res) => {
    const {id} = req.body;
    const query = `SELECT name FROM details WHERE id = ?`;

    db.query(query, id, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ success: false });
            return;
        }
        if (result.length > 0) {
            res.json({
                success: true,
                username: result[0].name,
            });
        } else {
            res.json({ success: false });
        }
    });
});

app.get('/data/:userId', (req, res) => {
    const userId = req.params.userId;
    const query = 'SELECT req_id,type,sub_type,from_date,fslot,to_date,tslot,applied_at,status FROM requests WHERE user_id = ?';
    db.query(query, [userId], (error, results, fields) => {
      if (error) {
        console.error('Error executing the query: ' + error.stack);
        return res.status(500).send('Internal Server Error');
      }
      if (results.length > 0) {
        res.json(results);
      } else {
        res.json({ success: false });
      }
    });
});

app.get('/sendOTP/:userId', (req, res) => {
    const userId = req.params.userId;
    const query = 'Select email from details where id = ?'

    db.query(query, userId, (error, results) => {
        if (error) {
            console.error('Error executing the query: ' + error.stack);
            return res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    
        if (results.length > 0) {
            const mailid = results[0].email;
            const send_mail = /*Enter your mail here */;
            const passwd = /*Enter your app password for mail here */;
            const otp = generateOTP();
    
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: send_mail,
                    pass: passwd,
                },
            });
    
            const mailOptions = {
                from: send_mail,
                to: mailid,
                subject: 'OTP for Verification',
                text: `Your OTP for changing LMS password is: ${otp}, Don't share this with anyone`,
            };
    
            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    console.error('Error sending OTP email:', error);
                    return res.status(500).json({ success: false, error: 'Internal Server Error' });
                } else {
                    return res.status(200).json({ success: true, otp });
                }
            });
        } else {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
    });
});    

app.get('/PendingRequests/:AdvisorId', (req, res) => {
    const AdvisorId = req.params.AdvisorId;
    const query = `SELECT req_id,user_id,type,sub_type,from_date,fslot,to_date,tslot,applied_at FROM requests WHERE user_id in (SELECT id FROM details WHERE advisor_id = ?) and status = 'Pending'`;
    db.query(query, [AdvisorId], (error, results, fields) => {
      if (error) {
        console.error('Error executing the query: ' + error.stack);
        return res.status(500).send('Internal Server Error');
      }
      if (results.length > 0) {
        res.json(results);
      } else {
        res.json({ success: false });
      }
    });
});
  

app.get('/OldRequests/:AdvisorId', (req, res) => {
    const AdvisorId = req.params.AdvisorId;
    const query = `SELECT req_id,user_id,type,sub_type,from_date,fslot,to_date,tslot,applied_at,status FROM requests WHERE user_id in (SELECT id FROM details WHERE advisor_id = ?) and status <> 'Pending' and status <> 'Withdrawn'`;
    db.query(query, [AdvisorId], (error, results, fields) => {
      if (error) {
        console.error('Error executing the query: ' + error.stack);
        return res.status(500).send('Internal Server Error');
      }
      if (results.length > 0) {
        res.json(results);
      } else {
        res.json({ success: false });
      }
    });
});
  
app.get('/pdf/:id', (req, res) => {
    const requestId = parseInt(req.params.id, 10);
    const query = 'SELECT file FROM requests WHERE req_id = ?';
  
    db.query(query, [requestId], (error, results, fields) => {
      if (error) {
        console.error('Error executing the query: ' + error.stack);
        return res.status(500).send('Internal Server Error');
      }
  
      if (results.length === 0 || !results[0].file) {
        return res.status(404).send('PDF not found');
      }
  
      const pdfData = results[0].file;
      res.setHeader('Content-Type', 'application/pdf');
      res.send(pdfData);
    });
});

app.get('/cancle/:id', (req, res) => {
    const requestId = parseInt(req.params.id, 10);
    const query = `UPDATE requests set status = 'Cancelled' where req_id = ?`

    db.query(query, [requestId], (error, results) => {
        if (error) {
            console.error('Error executing the query: ' + error.stack);
            return res.status(500).send('Internal Server Error');
        }
        if (results.affectedRows > 0) {
            res.json({ success: true });
        } else {
            return res.status(404).send('Request not found');
        }
    })
});

app.get('/approve/:id', (req, res) => {
    const requestId = parseInt(req.params.id, 10);
    const query = `UPDATE requests set status = 'Approved' where req_id = ?`

    db.query(query, [requestId], (error, results) => {
        if (error) {
            console.error('Error executing the query: ' + error.stack);
            return res.status(500).send('Internal Server Error');
        }
        if (results.affectedRows > 0) {
            res.json({ success: true });
        } else {
            return res.status(404).send('Request not found');
        }
    })
});

app.get('/withdraw/:id', (req, res) => {
    const requestId = parseInt(req.params.id, 10);
    const query = `UPDATE requests set status = 'Withdrawn' where req_id = ?`

    db.query(query, [requestId], (error, results) => {
        if (error) {
            console.error('Error executing the query: ' + error.stack);
            return res.status(500).send('Internal Server Error');
        }
        if (results.affectedRows > 0) {
            res.json({ success: true });
        } else {
            return res.status(404).send('Request not found');
        }
    })
});

app.post('/forgotPassword', (req, res) => {
    const { user, new_password } = req.body;
    const query = 'update details set passwd = ? where id = ?'
    
    db.query(query, [new_password, user], (err, updateResult) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ success: false });
        }
        if (updateResult.affectedRows > 0) {
            return res.json({ success: true });
        } else {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function generateOTP() {
    const min = 1000; 
    const max = 9999; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
