// server.js
import express from 'express';
import fetch from 'node-fetch';
const app = express();
app.use(express.json({ limit: '10mb' }));

app.post('/api/identify', async (req, res) => {
  const img = req.body.image;
  // Forward to plant.id or PlantME
  const apiResp = await fetch('https://api.plant.id/v2/identify', {
    method: 'POST',
    headers: { 'API-Key': 'YOUR_API_KEY', 'Content-Type': 'application/json' },
    body: JSON.stringify({ images: [ img ], modifiers: ["common_names"], plant_language: "en" })
  });
  const json = await apiResp.json();
  const suggestion = json.suggestions[0];
  res.json({
    common: suggestion.plant_name,
    scientific: suggestion.scientific_name,
    uses: suggestion.plant_details ? suggestion.plant_details.edible_part : "Information not available"
  });
});
app.listen(3000);
