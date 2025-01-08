import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    referenceDate: {
      type: Date,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    inTime: {
      type: String,
    },
    outTime: {
      type: String,
    },
    note: {
      type: String,
    },
    updateTime: {
      type: String,
    },
    totalHours: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to set `inTime` and calculate total hours
attendanceSchema.pre("save", function (next) {
  if (!this.inTime) {
    const now = new Date();
    this.inTime = now.toTimeString().split(" ")[0]; // Automatically set inTime in "HH:mm:ss"
  }

  // Calculate total hours if both inTime and outTime are present
  if (this.inTime && this.outTime) {
    const [inHours, inMinutes, inSeconds] = this.inTime.split(":").map(Number);
    const [outHours, outMinutes, outSeconds] = this.outTime
      .split(":")
      .map(Number);

    // Convert time to seconds for easier calculation
    const inTimeInSeconds = inHours * 3600 + inMinutes * 60 + inSeconds;
    const outTimeInSeconds = outHours * 3600 + outMinutes * 60 + outSeconds;

    // Calculate difference in seconds
    let totalSeconds = outTimeInSeconds - inTimeInSeconds;

    // Handle case where outTime is earlier than inTime (e.g., past midnight)
    if (totalSeconds < 0) {
      totalSeconds += 24 * 3600;
    }

    // Convert total seconds back to HH:mm:ss
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    this.totalHours = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  next();
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;
