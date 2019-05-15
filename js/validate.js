var validator  = new Validator("registration");
validator.EnableOnPageErrorDisplaySingleBox();
validator.EnableMsgsTogether();

// Firstname validation
validator.addValidation("con_firstname","required", "First Name is required"); // First name required
validator.addValidation("con_firstname","alphabetic", "First Name must be alphabetic"); // First name alphabet characters only

// Lastname validation
validator.addValidation("con_surname","req", "Surname is required"); // Last name required
validator.addValidation("con_surname","alphabetic", "Surname must be alphabetic"); // Last name alphabet characters only

// Gender validation
validator.addValidation("con_gender","req", "Gender is required"); // Gender required
validator.addValidation("con_gender","alphabetic", "Gender must be alphabetic"); // Gender alphabet characters only

// Age validation
validator.addValidation("con_age","req", "Age is required"); // Age required
validator.addValidation("con_age","numeric", "Please provide a valid age"); // Must be numbers
validator.addValidation("con_age","greaterthan=5", "age too young"); // Must be greater than 5 years old
validator.addValidation("con_age","greaterthan=80", "ager too old"); // Must be less than 80 years old 

// Mobile Phone Number validation
validator.addValidation("con_mobile","required", "Please enter a number"); // mobile required
validator.addValidation("con_mobile","numeric", "Please provide a valid phone number"); // Must be numbers
validator.addValidation("con_mobile","minlen=10", "Mobile Phone number too short"); // Must be more than 10 characters
validator.addValidation("con_mobile","maxlen=10", "Mobile Phone number too long"); // Must be less than 10 characters

// Home Phone Number validation
validator.addValidation("con_homephone","required", "Please enter a number"); // Home Phone number required
validator.addValidation("con_homephone","numeric", "Please provide a valid home phone number"); // Must be numbers
validator.addValidation("con_homephone","minlen=10", "Home Phone number too short"); // Must be more than 10 characters
validator.addValidation("con_homephone","maxlen=10", "Home Phone number too long"); // Must be less than 10 characters

// Address validation
validator.addValidation("con_address","required", "address is required"); // address required
validator.addValidation("con_address","alphabetic/numeric ", "address must be alphabetic/numeric") ; // address alphabet characters and number

// State validation
validator.addValidation("con_state","required", "state is required"); // state required
validator.addValidation("con_state","alphabetic ", "state must be alphabetic") // state alphabet characters only

// Postcode validation
validator.addValidation("con_postcode","required", "Please enter a number"); // postcode required
validator.addValidation("con_postcode","numeric", "Please provide a valid postcode"); // Must be numbers
validator.addValidation("con_postcode","minlen=4", "Postcode too short "); // Must be more than 4 characters
validator.addValidation("con_postcode","maxlen=5", "postcode too long"); // Must be less than 5 characters


// Email validation
validator.addValidation("con_email","required", "Email address is required"); // Email required
validator.addValidation("con_email","email", "Please provide a valid email address"); // Must be an email format

// Message validation
validator.addValidation("con_mess","required", "message is required"); // message required
validator.addValidation("con_mess","alphabetic", "message must be alphabetic"); // message alphabet characters only


