import * as services from '../services'

export const gpt = async (req, res) => {
    try {
        const {contentId} = req.body

        if (!contentId) {
            return res.status(400).json({error: "Missing contentId"})
        }

        const response = await services.sendPrompt(contentId);
        return res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message})
    }
}