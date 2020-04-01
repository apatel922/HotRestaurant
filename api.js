let reservations = [
    {name: "Bob",
    phone: "555-555-5555",
    email: "christian@email.com",
    ID: 5
}
];

let waitlist = [
    {name: "Hugh",
    phone: "222-222-2222",
    email: "heff@email.com",
    ID: 96
}
];

module.exports = function (app) {
    app.get("/api/tables", function(req, res) {
        res.json(reservations);
    });

    app.get("/api/waitlist", function(req, res) {
        res.json(waitlist);
    });
}