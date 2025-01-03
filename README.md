# React Mailer 

**React Mailer** is an Express.js application that uses the `react-email` library in combination with `nodemailer` for sending emails.

## Features

- **Dynamic Email Templates**: Leverage React components for creating customizable email templates.
- **Environment-Specific Configurations**: Use `.env` files for separate development and production settings.
- **Easy Integration**: Simplified POST request for sending emails with minimal setup.

---

## Installation

Follow these steps to set up and run the project:

### 1. Clone the Repository
```bash
git clone https://github.com/SARATHKUMAR-T/react-mailer.git
cd react-mailer

```
### 2.Install Dependencies

```bash
npm install

```
### 3.Set Environment Variables
Create the following files in the root directory:
.env.development,
.env.production
Add the following variables to both files:
```bash
PORT=<Your desired port>
SMTP_USER=<Your SMTP username>
SMTP_PASSWORD=<Your SMTP password>
```

### 4. Run the Application
For development
```bash
npm run dev
```

## Usage

### Endpoint
Make a post request to:
```bash
http://localhost:<PORT>/email/send
```
### Request Body
Send the following JSON in the request body:
{
  "email": "receiver@mail.com"
}

### Email Template
Email template is located in 
```bash
/src/utils/emailTemplates

