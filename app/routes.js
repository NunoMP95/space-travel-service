//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/create-routes/
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Run this code when a form is submitted to 'space-training'
router.post('/space-training-answer', function (req, res) {

  // Make a variable and give it the value from 'space-training
    const spaceTraining = req.body.spaceTraining

  // Check whether the variable matches a condition

    if (!spaceTraining) {
        return res.redirect('/error-space-training')
    }
    if (spaceTraining === "yes"){
        // Send user to next page
        return res.redirect('/your-name')
    } else {
        // Send user to ineligible page
        res.redirect('/ineligible')
    }
})

router.post('/your-name-answer', function (req, res) {

  // Name is required
    const yourName = req.body.yourName

  // Check whether the variable matches a condition

    if (!yourName) {
        return res.redirect('/error-your-name')
    } else {
        // Send user to address page
        res.redirect('/your-address')
    }
})

router.post('/your-address-answer', function (req, res) {
    const { addressLine1, addressTown, addressPostcode } = req.body

    // Check for data in fields
    if (!addressLine1 || !addressTown || !addressPostcode) {
    return res.redirect('/error-your-address')
    }
    res.redirect('/your-destination')
})

router.post('/your-destination-answer', function (req, res) {

const yourDestination = req.body.yourDestination

//Check for destination selection
    if (!yourDestination) {
        return res.redirect('/error-your-destination')
    } else {
        res.redirect('/check-answers')
    }
})