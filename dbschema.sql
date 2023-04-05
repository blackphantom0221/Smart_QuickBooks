CREATE TABLE phonebook
(
  id              INT unsigned NOT NULL AUTO_INCREMENT,
  firstName              VARCHAR(150) NOT NULL,
  lastName            VARCHAR(150) NOT NULL,
  phoneNumber            VARCHAR(150) NOT NULL,
  emailAddress           VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);
