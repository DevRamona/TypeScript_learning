var approvalStatus;
(function (approvalStatus) {
    approvalStatus[approvalStatus["draft"] = 0] = "draft";
    approvalStatus[approvalStatus["approved"] = 1] = "approved";
    approvalStatus[approvalStatus["submitted"] = 2] = "submitted";
    approvalStatus[approvalStatus["received"] = 3] = "received";
})(approvalStatus || (approvalStatus = {}));
var request = {
    id: 1,
    status: approvalStatus.received,
    description: "Please receive this"
};
if (request.status === approvalStatus.received) {
    console.log("My ".concat(request.id, " has been ").concat(request.description));
}
