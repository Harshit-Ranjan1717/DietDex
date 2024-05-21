import React from 'react'
import { useState } from 'react'
import { Navbar } from './Navbar'
import { MdOutlineFoodBank } from "react-icons/md";
import { Link } from 'react-router-dom';
import DietPlan from './DietPlan';
import { GoogleGenerativeAI } from "@google/generative-ai";

const DietInput = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const [mealPlan, setMealPlan] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);

  async function fun() {
    console.log("clicked");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = ` Act as a Diet Recommendation system and suggest diet for the query: I am Non-vegetarian and I have Diabetes . please make your reponse as array of objects with headings and subheadings like : [{},{},{},{}] [
        {
          "heading": "Breakfast",
          "subheadings": [
            {
              "item": "Oatmeal with berries and nuts",
              "description": "Provides fiber, antioxidants, and healthy fats."
            },
            {
              "item": "Tofu scramble with vegetables",
              "description": "A plant-based source of protein and essential nutrients."
            },
            {
              "item": "Fruit smoothie with plant-based milk",
              "description": "A quick and easy way to get a boost of vitamins, minerals, and antioxidants."
            }
          ]
        },
        {
          "heading": "Lunch",
          "subheadings": [
            {
              "item": "Lentil soup with whole-wheat bread",
              "description": "A hearty and protein-packed meal."
            },
            {
              "item": "Quinoa salad with roasted vegetables",
              "description": "Provides complex carbohydrates, fiber, and essential vitamins."
            },
            {
              "item": "Bean burrito with brown rice",
              "description": "A flavorful and satisfying option that offers plant-based protein and fiber."
            }
          ]
        },
        {
          "heading": "Dinner",
          "subheadings": [
            {
              "item": "Vegetable stir-fry with tofu",
              "description": "A nutrient-dense dish that provides a variety of vitamins, minerals, and antioxidants."
            },
            {
              "item": "Lentil shepherd's pie",
              "description": "A vegetarian twist on a classic dish, featuring plant-based protein and fiber."
            },
            {
              "item": "Pasta with marinara sauce and grilled vegetables",
              "description": "A balanced meal that offers carbohydrates, protein, and essential nutrients."
            }
          ]
        },
        {
          "heading": "Snacks",
          "subheadings": [
            {
              "item": "Fruit and nut butter",
              "description": "A satisfying and nutrient-rich snack."
            },
            {
              "item": "Hummus with vegetable sticks",
              "description": "Provides protein, fiber, and healthy fats."
            },
            {
              "item": "Trail mix with nuts, seeds, and dried fruit",
              "description": "A convenient and energy-boosting snack."
            }
          ]
        }
      ] make your data Structure like this , I want this kind of outcome `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const ans = response.candidates[0]?.content?.parts[0].text;
    console.log(ans);
    const res=JSON.parse(ans);
    console.log(res);
    setMealPlan(res);
  }

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-center mb-6">Enter your details:</h2>
                        <div className="mb-4">
                            <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age:</label>
                            <input type="text" id="age" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-300 border-2 rounded-lg p-2" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="weight" className="block text-gray-700 font-semibold mb-2">Weight:</label>
                            <input type="text" id="weight" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-gray-300 border-2 rounded-lg p-2" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="allergy" className="block text-gray-700 font-semibold mb-2">Allergic to:</label>
                            <input type="text" id="allergy" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-gray-300 border-2 rounded-lg p-2" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="disease" className="block text-gray-700 font-semibold mb-2">Diseases (if any):</label>
                            <input type="text" id="disease" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-gray-300 border-2 rounded-lg p-2" />
                        </div>
                        <button type="submit" onClick={fun} className="flex justify-around items-center w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Generate your Diet Plan <MdOutlineFoodBank size={30}/></button>
                    </form>
                </div>
            </div>
            <DietPlan mealPlan={mealPlan}></DietPlan>
        </>
    )
}

export default DietInput