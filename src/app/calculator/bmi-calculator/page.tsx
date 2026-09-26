import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { BMIClient } from "./BMIClient";

const title = "BMI Calculator | Check Your Body Mass Index Instantly";
const description = "Free online BMI calculator. Check your Body Mass Index (BMI), find out your healthy weight range, and see your category with our interactive gauge. Supports metric and imperial.";
const path = "/calculator/bmi-calculator";

export const metadata: Metadata = generateSEO({
  title,
  description,
  path,
});

const faqs = [
  {
    question: "What is BMI and why is it important?",
    answer: "BMI stands for Body Mass Index. It is a simple calculation based on a person's height and weight. The formula is used to screen for weight categories that may lead to health problems, providing a general indicator of healthy body weight."
  },
  {
    question: "How accurate is the BMI measurement?",
    answer: "While BMI is a widely used and useful screening tool, it does have limitations. It does not measure body fat directly and cannot distinguish between fat and muscle mass. Therefore, athletes and highly muscular individuals might have a high BMI but a low body fat percentage."
  },
  {
    question: "What are the standard BMI categories?",
    answer: "According to the World Health Organization (WHO), a BMI below 18.5 is considered Underweight. 18.5 to 24.9 is Normal weight. 25.0 to 29.9 is Overweight, and 30.0 or higher falls into the Obese category."
  },
  {
    question: "Can I use this calculator for children or teens?",
    answer: "The standard BMI categories used in this calculator are designed for adults (ages 20 and older). Children and teens use a different, percentile-based BMI calculation because their body composition changes significantly as they grow."
  },
  {
    question: "Does the BMI calculator support pounds and feet?",
    answer: "Yes! Our calculator allows you to easily switch between the Metric system (centimeters and kilograms) and the Imperial system (feet/inches and pounds) so you can use the units you are most comfortable with."
  },
  {
    question: "What should I do if my BMI is out of the normal range?",
    answer: "If your BMI falls outside the 'Normal weight' range, it is best to consult with a healthcare provider or a registered dietitian. They can evaluate your overall health, diet, and lifestyle to give you personalized medical advice."
  }
];

export default function BMICalculatorPage() {
  const content = (
    <div className="space-y-6">
      <h2>Welcome to the Free BMI Calculator</h2>
      <p>
        Understanding your health begins with understanding your body. One of the most common and accessible metrics used by healthcare professionals worldwide is the Body Mass Index, or BMI. Whether you are beginning a fitness journey, monitoring your weight, or simply curious about your current health status, our <strong>BMI Calculator</strong> provides a quick, easy, and completely free way to check your numbers.
      </p>

      <h3>What is Body Mass Index (BMI)?</h3>
      <p>
        Body Mass Index is a numerical value derived from the mass (weight) and height of an individual. It serves as a screening tool to categorize a person as underweight, normal weight, overweight, or obese. While it is not a direct measurement of body fat percentage, research has shown that BMI strongly correlates with more direct measures of body fat, making it a highly practical preliminary health assessment.
      </p>

      <h3>How is BMI Calculated? (The Formula Explained)</h3>
      <p>
        Our calculator handles all the complex math behind the scenes, but the formula itself is quite straightforward. It changes slightly depending on whether you are using the Metric or Imperial system.
      </p>
      <ul>
        <li>
          <strong>Metric System (kg/m²):</strong><br />
          Formula: <code>Weight (kg) / [Height (m)]²</code><br />
          For example, if you weigh 70 kg and are 1.70 meters (170 cm) tall, your BMI is calculated as 70 / (1.70 × 1.70) = 24.2.
        </li>
        <li>
          <strong>Imperial System (lbs/in²):</strong><br />
          Formula: <code>703 × Weight (lbs) / [Height (in)]²</code><br />
          For example, if you weigh 150 lbs and are 65 inches (5 feet 5 inches) tall, your BMI is 703 × 150 / (65 × 65) = 24.9.
        </li>
      </ul>

      <h3>Understanding Your Results</h3>
      <p>
        Once you enter your details into the tool, you will see your BMI number along with an interactive, colored gauge that points to your specific category. The tool will also display a healthy weight range tailored to your height. Here is how the standard categories breakdown according to the World Health Organization:
      </p>
      <ul>
        <li><strong>Underweight (Less than 18.5):</strong> Being underweight can indicate malnutrition, an eating disorder, or other health issues. Consulting a doctor is recommended.</li>
        <li><strong>Normal Weight (18.5 - 24.9):</strong> This is the ideal range, associated with the lowest risk of weight-related health conditions.</li>
        <li><strong>Overweight (25 - 29.9):</strong> Individuals in this range may have an increased risk of developing heart disease, high blood pressure, and type 2 diabetes.</li>
        <li><strong>Obese (30 or higher):</strong> This range indicates a significantly higher risk for weight-related diseases. Weight loss through diet and exercise is generally advised.</li>
      </ul>

      <h3>Step-by-Step Guide: How to Use the BMI Calculator</h3>
      <p>
        Our tool is designed for absolute simplicity. Follow these quick steps to get your personalized results:
      </p>
      <ol>
        <li><strong>Choose Your Unit System:</strong> At the top of the calculator, select either "Metric" (if you know your weight in kilograms and height in centimeters) or "Imperial" (if you prefer pounds and feet/inches).</li>
        <li><strong>Enter Your Height:</strong> Use the convenient sliders or type directly into the number input fields to set your exact height.</li>
        <li><strong>Enter Your Weight:</strong> Similarly, adjust the slider or type in your current weight.</li>
        <li><strong>View Your Instant Analysis:</strong> The calculator updates in real-time. Look at the right side of the panel to see your BMI score, your weight category, the visual gauge, and the healthy weight range for your specific height.</li>
      </ol>

      <h3>Limitations of the BMI Scale</h3>
      <p>
        While the BMI is a fantastic and fast screening tool, it is important to remember its limitations. Because the formula only uses height and weight, it cannot differentiate between the weight of fat, muscle, and bone mass. 
      </p>
      <p>
        For instance, bodybuilders and highly trained athletes naturally have a lot of heavy muscle mass. Their high weight might push their BMI into the "overweight" or "obese" categories, even though their body fat percentage is very low and they are in peak physical condition. Conversely, older adults who have lost significant muscle mass may fall into the "normal" range despite having a higher-than-healthy body fat percentage. Always use BMI as a starting point, not a definitive diagnosis.
      </p>

      <h3>Start Tracking Your Health Today</h3>
      <p>
        Maintaining a healthy weight is a cornerstone of overall wellbeing. By regularly checking your BMI, you can stay informed about your body and make proactive decisions regarding your diet, physical activity, and lifestyle. Bookmark this page and return whenever you need a fast, accurate, and completely private BMI check!
      </p>
    </div>
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tasklora.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculator Tools",
        "item": "https://tasklora.com/calculator"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "BMI Calculator",
        "item": `https://tasklora.com${path}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BMI Calculator",
    "url": `https://tasklora.com${path}`,
    "description": description,
    "applicationCategory": "HealthApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      
      <ToolLayout
        title="BMI Calculator"
        description={description}
        path={path}
        content={content}
        faqs={faqs}
      >
        <BMIClient />
      </ToolLayout>
    </>
  );
}
