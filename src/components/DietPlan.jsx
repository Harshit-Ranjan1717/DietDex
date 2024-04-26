import React from 'react';
import { Navbar } from './Navbar';

const DietPlan = () => {
    const mealPlan = [
        {
            meal: "Breakfast",
            foods: [
                "Oatmeal cooked with water or unsweetened almond milk, topped with sliced almonds and berries",
                "Whole grain toast with avocado slices and a sprinkle of chia seeds"
            ]
        },
        {
            meal: "Mid-Morning Snack",
            foods: [
                "A small apple with a tablespoon of almond butter"
            ]
        },
        {
            meal: "Lunch",
            foods: [
                "Lentil soup or chickpea salad with mixed greens, cherry tomatoes, cucumber, and a lemon-tahini dressing",
                "A small serving of brown rice or quinoa"
            ]
        },
        {
            meal: "Afternoon Snack",
            foods: [
                "Carrot sticks with hummus",
                "Sugar-free Greek yogurt"
            ]
        },
        {
            meal: "Dinner",
            foods: [
                "Grilled tofu or tempeh marinated in a low-sodium soy sauce with steamed broccoli and quinoa",
                "Mixed vegetable stir-fry with tofu or paneer (Indian cottage cheese)"
            ]
        },
        {
            meal: "Evening Snack (if needed)",
            foods: [
                "A handful of mixed nuts (almonds, walnuts, cashews)"
            ]
        },
        {
            heading: "Fluid Intake",
            recommendations: [
                "Stay hydrated throughout the day by drinking plenty of water, herbal teas, or infused water with lemon or cucumber.",
                "Limit sugary drinks and alcohol."
            ]
        },
        {
            heading: "General Guidelines",
            guidelines: [
                "Portion Control: Be mindful of portion sizes to avoid overeating, which can lead to spikes in blood sugar levels.",
                "Choose Low-Glycemic Index (GI) Foods: Opt for foods with a low GI to help regulate blood sugar levels more effectively.",
                "Healthy Fats: Incorporate sources of healthy fats like avocados, nuts, seeds, and olive oil, but consume them in moderation.",
                "Fiber-Rich Foods: Include plenty of fiber in your diet through vegetables, fruits, whole grains, and legumes to aid digestion and blood sugar control.",
                "Regular Monitoring: Keep track of your blood sugar levels regularly, especially after meals, to understand how different foods affect your body."
            ]
        }
    ];

    return (
        <>
        <Navbar/>
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-semibold mb-4">Meal Plan</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Meal</th>
                            <th className="px-4 py-2">Foods</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mealPlan.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.meal}</td>
                                <td className="border px-4 py-2">
                                    {item.foods ? (
                                        <ul className="list-disc pl-4">
                                            {item.foods.map((food, foodIndex) => (
                                                <li key={foodIndex}>{food}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{item?.recommendations?.join(", ")}</p>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default DietPlan;
