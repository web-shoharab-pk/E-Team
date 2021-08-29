import React, { useEffect, useState } from "react";
import { db } from "../../Authentication/loginmanager";

const CourseVideos = () => {
  const [videoDetails, setVideoDetails] = useState<any>({});
  console.log(videoDetails);
  useEffect(() => {
    db.collection("course_videos")
      .get()
      .then((data: any) => {
        setVideoDetails(data.docs);
      });
  }, []);

  return <div>
      
  </div>;
};

export default CourseVideos;
