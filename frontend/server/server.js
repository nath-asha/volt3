import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/getBackgroundImageFromWasabi', (req, res) => {
  
  const imageURL = 'https://https://s3.ap-northeast-1.wasabisys.com/voltixteam/img7.jpg';
  res.json({ imageURL });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

if (!process.env.WASABI_BUCKET) {
  throw new Error('WASABI_BUCKET environment variable is not defined. Set it to your Wasabi bucket name.');
}



// import express, { Request, Response, NextFunction } from 'express';
// import { upload, generatePublicPresignedUrl } from './yourModule'; // Replace 'yourModule' with the actual module name.

// const router = express.Router();

// // Define a route for file upload
// router.post('/upload', upload.single('file'), (req: Request, res: Response, next: NextFunction) => {
//   // Handle file upload here, you can access the uploaded file using req.file
//   // You can perform any additional processing or response handling here.
//   res.json({ message: 'File uploaded successfully' });
// });

// // Define a route for generating a public pre-signed URL
// router.get('/generate-url/:key', (req: Request, res: Response, next: NextFunction) => {
//   const key = req.params.key;

//   // Generate the public pre-signed URL
//   const publicPresignedUrl = generatePublicPresignedUrl(key);

//   // Return the generated URL in the response
//   res.json({ url: publicPresignedUrl });
// });

// export default router;

