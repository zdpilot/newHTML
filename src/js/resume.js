/**
 * Created by patrickkesler on 5/3/16.
 */
var businesscard = {
    name: 'Patrick Kesler',
    address: '3382 N Dornock Dr. Eagle Mountain, UT 84005',
    phone: '801-633-6373',
    email: 'rimington4987@gmail.com',
    quote: '"The only easy day was yesterday"'
}

function card() {
    document.getElementById('quote').innerHTML= businesscard.quote;
    document.getElementById('name').innerHTML= businesscard.name;
    document.getElementById('address').innerHTML= businesscard.address;
    document.getElementById('phone').innerHTML= businesscard.phone;
    document.getElementById('email').innerHTML= businesscard.email;
}
