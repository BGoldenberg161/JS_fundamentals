**Study with Yoel**

What is a form?
-"A tunnel for data"
-main point of interaction for user & app
-allows user to enter(send) data
-provide immediate feedback to client
-a form can be refered to as a widget
-input types:(typically an <input> tag)
    -text field
    -dropdown
    -multiselect
    -checkbox
    -etc.
-can have controls
    -can enforce formats and/or values


Designing a form
1. always take a step back and think about your form
    -quick mockup has immense value:
        -what structure fits best for user input?
    -From UX point of view, the larger the form the more frustation
        -**ask only for the data you need**

Example: See index.html
-Contact form
-3 text fields (name, email, message)
-1 button (send)

Contact Us

Name:    [John Doe]
Email:   [example@test.com]
Message: [Your request here]

         {Send your message}


button takes a type attribute:
    can have 3 values
        1. submit
            -send form data to webpage defined by action attribute of form element
        2. reset
            -reset all form control to default value
        3. button
            -for custom defined button functionality
