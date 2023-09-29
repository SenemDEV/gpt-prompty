import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

//GET prompt
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

//Update prompt
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    // Update the prompt with new data
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Error Updating Prompt", { status: 500 });
  }
};

//Delete prompt
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    await Prompt.findByIdAndRemove(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};

// import { connectToDB } from "@utils/database";
// import Prompt from "@models/prompt";

// //GET prompt (read)
// export const GET = async (request, { params }) => {
//   try {
//     await connectToDB();

//     const prompt = await Prompt.findById(params.id).populate("creator");
//     if (!prompt) return new Response("Prompt not found", { status: 404 });

//     return new Response(JSON.stringify(prompt), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response("Failed to fetch all the prompts", {
//       status: 500,
//     });
//   }
// };

// //PATCH prompt (update)
// export const PATCH = async (request, { params }) => {
//   const { prompt, tag } = await request.json();

//   try {
//     await connectToDB();

//     const existingPrompt = await Prompt.findById(params.id);

//     if (!existingPrompt)
//       return new Response("Prompt not found", { status: 404 });

//     existingPrompt.prompt = prompt;
//     existingPrompt.tag = tag;

//     await existingPrompt.save();

//     return new Response(JSON.stringify(existingPrompt), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response("Failed to update the prompt", {
//       status: 500,
//     });
//   }
// };

// //Delete prompt (delete)
// export const DELETE = async (request, { params }) => {
//   try {
//     await connectToDB();

//     await Prompt.findByIdAndRemove(params.id);

//     return new Response("Prompt deleted successfully.", {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response("Failed to delete the prompt", {
//       status: 500,
//     });
//   }
// };