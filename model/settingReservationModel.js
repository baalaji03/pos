import mongoose from "mongoose";
const ReservationSchema = new mongoose.Schema(
 {
    
      
        isAvailable: {
          type: Boolean,
          default: false,
        },
        day: {
          type: String,
          required: true, // e.g., "Sunday", "Monday"
        },
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
      },
    
  
  { timestamps: true }
);

const Reservation = mongoose.model("Reservation", ReservationSchema);
export default Reservation;
