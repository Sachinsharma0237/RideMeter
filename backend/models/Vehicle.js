const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['car', 'bike'], required: true },
  brand: { type: String, required: true },
  model: { type: String },
  imageUrl: { type: String },
  costPerDay: { type: Number, required: true },
  mileage: { type: Number }, // in km/l or km/kWh
  fuelType: { type: String, enum: ['petrol', 'diesel', 'electric', 'cng'], required: true },
  seats: { type: Number },
  transmission: { type: String, enum: ['manual', 'automatic'] },
  description: { type: String },
}, {
  timestamps: true
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
