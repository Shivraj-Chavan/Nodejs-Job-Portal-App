import express from "express";
import userAuth from "../middelwares/authMiddelware.js";
import { createJobController, deleteJobController, getAllJobsController, jobStatsController, updateJobController } from "../controllers/jobsController.js";
const router=express.Router()

// create job || post
router.post("/create-job",userAuth,createJobController)


// Get Job
router.get("/get-jobs",userAuth,getAllJobsController)


// Update Jobs
router.patch("/update-job/:id",userAuth,updateJobController)

// delete Jobs
router.delete("/delete-job/:id",userAuth,deleteJobController)

//jobs stats
router.get("/job-stats",userAuth,jobStatsController)

export default router;