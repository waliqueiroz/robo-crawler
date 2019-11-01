const appService = require('../services/AppService');
module.exports = {
    async buscar(req, res) {
        const checkin = req.body.checkin.replace(/\//g, '');
        const checkout = req.body.checkout.replace(/\//g, '');
        const url = `https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=1182a15b-900a-4684-94e1-6007a4cd0723#/&diff=false&CheckIn=${checkin}&CheckOut=${checkout}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-`;

        const response = await appService.buscar(url);
        return res.json(response);
    },
}