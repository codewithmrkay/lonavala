/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
  import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Generate Travel plan for location: las vegas, for 3 days for couple with a cheap budget , give me a hotels options list with hotelname , hotel address , price, hotel img url, geo coordinates, rating, descriptions and suggest itinerary with placeName , place details, place image url , geo cordinates , ticket, pricing, rating, time travel each of the location for 3 days with each day plan with best time to visit in json format",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel plan for location: las vegas, for 3 days for couple with a cheap budget , give me a hotels options list with hotelname , hotel address , price, hotel img url, geo coordinates, rating, descriptions and suggest itinerary with placeName , place details, place image url , geo cordinates , ticket, pricing, rating, time travel each of the location for 3 days with each day plan with best time to visit in json format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"hotels\": [{\"hotelName\": \"The D Las Vegas\", \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\", \"price\": \"$50-$100\", \"hotelImgUrl\": \"https://images.trvl-media.com/media/content/expedia/hotel-photos/2598732/2598732_1001_s.jpg\", \"geoCoordinates\": \"36.1699,-115.1423\", \"rating\": \"3.5\", \"description\": \"A budget-friendly hotel located in the heart of Fremont Street Experience, known for its lively atmosphere and casino.\"}, {\"hotelName\": \"Golden Nugget Las Vegas\", \"hotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\", \"price\": \"$75-$150\", \"hotelImgUrl\": \"https://images.trvl-media.com/media/content/expedia/hotel-photos/2598719/2598719_1001_s.jpg\", \"geoCoordinates\": \"36.1694,-115.1414\", \"rating\": \"4.0\", \"description\": \"A historic hotel with a vibrant casino, an impressive aquarium, and various dining options.\"}, {\"hotelName\": \"Circus Circus Hotel & Casino\", \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\", \"price\": \"$40-$80\", \"hotelImgUrl\": \"https://images.trvl-media.com/media/content/expedia/hotel-photos/2598756/2598756_1001_s.jpg\", \"geoCoordinates\": \"36.1105,-115.1738\", \"rating\": \"3.0\", \"description\": \"A family-friendly hotel with a circus theme, offering affordable rates and a wide range of entertainment options.\"}, {\"hotelName\": \"The Orleans Hotel & Casino\", \"hotelAddress\": \"4500 W Tropicana Ave, Las Vegas, NV 89103\", \"price\": \"$60-$120\", \"hotelImgUrl\": \"https://images.trvl-media.com/media/content/expedia/hotel-photos/2598785/2598785_1001_s.jpg\", \"geoCoordinates\": \"36.0947,-115.2127\", \"rating\": \"3.5\", \"description\": \"A spacious hotel with a casino, a golf course, and a variety of dining and entertainment options.\"}], \"itinerary\": [{\"day\": \"Day 1\", \"plan\": [{\"placeName\": \"Fremont Street Experience\", \"placeDetails\": \"A pedestrian-friendly street in downtown Las Vegas with live music, street performers, and dazzling light shows.\", \"placeImageUrl\": \"https://www.vegasexperience.com/wp-content/uploads/2022/12/Fremont-Street-Experience-Las-Vegas-1024x683.jpg\", \"geoCoordinates\": \"36.1699,-115.1423\", \"ticket\": \"Free\", \"pricing\": \"Free\", \"rating\": \"4.5\", \"timeTravel\": \"2-3 hours\", \"bestTimeToVisit\": \"Evening, for the full light show experience.\"}, {\"placeName\": \"The Neon Museum\", \"placeDetails\": \"A museum showcasing vintage neon signs from Las Vegas's history, offering a glimpse into the city's past.\", \"placeImageUrl\": \"https://www.neonmuseum.org/media/images/featured/NeonMuseum_Sign.jpg\", \"geoCoordinates\": \"36.1715,-115.1510\", \"ticket\": \"Adult: $25\", \"pricing\": \"Adults: $25, Children: $15\", \"rating\": \"4.0\", \"timeTravel\": \"1-2 hours\", \"bestTimeToVisit\": \"Late afternoon, for good lighting and a less crowded experience.\"}, {\"placeName\": \"Heart Attack Grill\", \"placeDetails\": \"A unique restaurant known for its unhealthy and over-the-top burger creations, attracting adventurous eaters.\", \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Heart_Attack_Grill_2010.jpg/800px-Heart_Attack_Grill_2010.jpg\", \"geoCoordinates\": \"36.1699,-115.1423\", \"ticket\": \"N/A\", \"pricing\": \"Budget-friendly, with burgers starting at $5\", \"rating\": \"3.5\", \"timeTravel\": \"1 hour\", \"bestTimeToVisit\": \"Lunch or dinner, as it's a popular spot.\"}]}, {\"day\": \"Day 2\", \"plan\": [{\"placeName\": \"The Strip\", \"placeDetails\": \"The famous Las Vegas Boulevard, lined with world-class hotels, casinos, and entertainment venues.\", \"placeImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/large_image/public/images/header-strip-2019.jpg?itok=1lT9zF1P\", \"geoCoordinates\": \"36.1149,-115.1724\", \"ticket\": \"Free\", \"pricing\": \"Free\", \"rating\": \"5.0\", \"timeTravel\": \"Full day\", \"bestTimeToVisit\": \"Day or night, each offering a different atmosphere.\"}, {\"placeName\": \"Bellagio Conservatory & Botanical Garden\", \"placeDetails\": \"A stunning display of flowers and botanical arrangements, changing with the seasons, located inside the Bellagio hotel.\", \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/conservatory/Conservatory-2022-09-17-960x640.jpg\", \"geoCoordinates\": \"36.1174,-115.1729\", \"ticket\": \"Free\", \"pricing\": \"Free\", \"rating\": \"4.5\", \"timeTravel\": \"1-2 hours\", \"bestTimeToVisit\": \"Anytime, but the afternoon light enhances the beauty of the flowers.\"}, {\"placeName\": \"High Roller Observation Wheel\", \"placeDetails\": \"A giant observation wheel offering panoramic views of the Las Vegas Strip and the surrounding desert.\", \"placeImageUrl\": \"https://www.caesars.com/content/dam/caesars/linq/high-roller/high-roller-1080x610.jpg\", \"geoCoordinates\": \"36.1177,-115.1725\", \"ticket\": \"Adult: $35\", \"pricing\": \"Adults: $35, Children: $25\", \"rating\": \"4.0\", \"timeTravel\": \"1 hour\", \"bestTimeToVisit\": \"Sunset, for breathtaking views of the city at dusk.\"}]}, {\"day\": \"Day 3\", \"plan\": [{\"placeName\": \"Hoover Dam\", \"placeDetails\": \"A massive concrete dam on the Colorado River, a marvel of engineering and a popular tourist destination.\", \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hoover_Dam_from_Nevada.jpg/1280px-Hoover_Dam_from_Nevada.jpg\", \"geoCoordinates\": \"36.0057,-114.9990\", \"ticket\": \"Adult: $30\", \"pricing\": \"Adults: $30, Children: $15\", \"rating\": \"4.5\", \"timeTravel\": \"3-4 hours\", \"bestTimeToVisit\": \"Morning, for cooler temperatures and less crowds.\"}, {\"placeName\": \"Red Rock Canyon National Conservation Area\", \"placeDetails\": \"A scenic desert landscape with red sandstone cliffs, hiking trails, and scenic drives.\", \"placeImageUrl\": \"https://www.nps.gov/redr/planyourvisit/images/Red_Rock_Canyon-Sunset_320.jpg\", \"geoCoordinates\": \"36.2060,-115.3350\", \"ticket\": \"Adult: $15\", \"pricing\": \"Adults: $15, Children: $10\", \"rating\": \"4.0\", \"timeTravel\": \"2-3 hours\", \"bestTimeToVisit\": \"Late afternoon, for stunning sunset views.\"}, {\"placeName\": \"Valley of Fire State Park\", \"placeDetails\": \"A state park with colorful sandstone formations, petroglyphs, and scenic hiking trails.\", \"placeImageUrl\": \"https://www.parks.nv.gov/images/parks/valleyoffire/gallery/valley-of-fire-banner.jpg\", \"geoCoordinates\": \"36.3869,-114.7655\", \"ticket\": \"Adult: $10\", \"pricing\": \"Adults: $10, Children: $5\", \"rating\": \"4.5\", \"timeTravel\": \"Half day\", \"bestTimeToVisit\": \"Morning or late afternoon, to avoid the heat of the day.\"}]}]}\n\n```"},
          ],
        },
      ],
    });