/* eslint-disable consistent-return */
// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

// Uploads an image file
const uploadImage = async (imagePath) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};

const getAspectRatio = async (publicId) => {
  try {
    // Get details about the asset
    const result = await cloudinary.api.resource(publicId);
    console.log(result);
    return [result.height, result.width];
  } catch (error) {
    console.error(error);
  }
};

const createImageURL = (publicId, dimensions) => {
  let newImageHeight = dimensions[0];
  let newImageWidth = dimensions[1];

  // changing width and height of image according to instagram guildlines
  if (newImageHeight / newImageWidth > 5 / 4) {
    newImageHeight = 500;
    newImageWidth = 400;
  } else if (newImageHeight / newImageWidth < 1 / 1.91) {
    newImageHeight = 100;
    newImageWidth = 191;
  }

  // Create an image tag with transformations applied to the src URL
  const imageURL = cloudinary.url(publicId, {
    transformation: [
      {
        width: newImageWidth, height: newImageHeight,
      },
    ],
  });

  return imageURL;
};

const imageCreator = async (imagePath) => {
  // Return "https" URLs by setting secure: true
  cloudinary.config({
    secure: true,
  });

  // Log the configuration
  console.log(cloudinary.config());

  // Upload the image
  const publicId = await uploadImage(imagePath);

  // get aspect ratio of image
  const dimensions = await getAspectRatio(publicId);

  // Create an image tag, using two of the colors in a transformation
  const imageURL = await createImageURL(publicId, dimensions);

  // Log the image tag to the console
  console.log(imageURL);

  return imageURL;
};

const convertImage = (req, res) => {
  imageCreator(req.query.imagePath).then(
    (url) => {
      res.json({ convertedImage: url });
    },
  );
};

export default convertImage;
