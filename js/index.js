let vehicleInventory = [];
function logVehicle() {
    const vehicleType = document.getElementById('vehicle-type').value;
    const make = document.getElementById('InputMake').value;
    const model = document.getElementById('InputModel').value;
    const registrationNumber = document.getElementById('InputNumber').value;
    const condition = document.getElementById('condition').value;
    const vehicle = {
        vehicleType,
        make,
        model,
        registrationNumber,
        condition
    };
    vehicleInventory.push(vehicle);
    document.getElementById('vehicle-form').reset();
    console.log(vehicleInventory);
}
document.getElementById('vehicle-form').addEventListener('click', logVehicle);