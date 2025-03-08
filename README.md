# EduLift
https://devpost.com/software/edulift?ref_content=my-projects-tab&ref_feature=my_projects


This project was created by Rahiq Issam and Beyza Nur Ulu.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/RayIssam/EduLift)

## AI-Powered Teacher Assistant

### Problem Statement
Teachers spend a significant amount of time on administrative tasks such as grading, lesson planning, and providing feedback while trying to track student progress. This leaves them with less time to focus on personalized teaching, mentoring, and engaging with students on an individual level. As a result, the quality of education and student success may be impacted.

---

## How AI Benefits Teachers
- **Time-Saving**: Automates grading and report generation.
- **Reduced Workload**: Frees up time for lesson planning and individualized teaching.
- **Increased Efficiency**: Provides insights for real-time adjustments in teaching.

---

## What EduLift Does
EduLift is an AI-powered teaching assistant designed to help educators with:

- **Instant Lesson Plan Generation**: Create structured, relevant lesson plans quickly.
- **Quiz Creation & Automated Grading**: Design quizzes and automatically grade them with AI.
- **Student Performance Analysis**: Analyze student progress and provide actionable insights for educators.
- **Personalized Learning Support**: Identify student strengths and weaknesses and recommend targeted resources.
- **Progress Tracking**: Analyze student performance using CSV data to visualize progress trends.

---

## Technical Process

### How We Built It

#### Frontend:
- **Next.js**: Used to build a fast, responsive web application.
- **Tailwind CSS**: Provides a clean, customizable UI, enabling rapid design iteration.

#### AI Integration:
- Initially, **Azure Machine Learning** was used to predict student performance and offer tailored insights. However, due to data and training limitations, we pivoted to **Microsoft Copilot AI**, which streamlined real-time analytics and automated lesson generation.
- The AI model can generate lesson plans, quizzes, and grading solutions automatically based on existing curriculum and student performance data.

#### Data Processing:
- We used **CSV-based processing** to track and analyze student performance data across various factors such as study habits, attendance, and previous scores.
- The system processes data using custom algorithms to identify trends and gaps in student learning, giving teachers detailed insights into individual and class-wide performance.

#### Automation:
- Designed an automation pipeline using **Power Automate** for cloud-based file retrieval and report generation, though full integration was not completed due to time constraints.
- **Microsoft Copilot AI** also facilitates real-time feedback and resource recommendations based on individual student performance.

---

## Understanding the Dataset

Our dataset consists of 20 features that influence student performance, grouped into three main categories:

### Behavioral & Study Factors:
- Hours_Studied
- Attendance
- Sleep_Hours
- Previous_Scores
- Motivation_Level
- Tutoring_Sessions
- Physical_Activity

These factors directly impact a student's learning habits and academic engagement.

### Parental & Socioeconomic Factors:
- Parental_Involvement
- Family_Income
- Parental_Education_Level

These reflect the role of family background in academic success.

### School & External Factors:
- Teacher_Quality
- School_Type
- Peer_Influence
- Access_to_Resources

These highlight the broader educational environment.

### Target Variable:
- **Exam_Score**: Represents the final exam performance, serving as the key measure of student outcomes.

---

## Lessons Learned
- **AI Accuracy**: AI-powered teaching assistants can reduce the workload on teachers, but they need to be trained on large, real student datasets to be truly effective.
- **User Experience**: Intuitive UI/UX is critical to adoption by educators. Teachers need tools that are easy to integrate into their daily routines.
- **Real-Time Feedback**: Real-time performance analysis and automated recommendations are vital for making data-driven adjustments in teaching methods.
- **Cloud Automation**: A fully integrated cloud-based system could drastically reduce friction in report generation and file management for teachers.

---

## Future Work
- **Improved AI Training**: Enhance the AI model with real student performance data for more accurate predictions and personalized learning insights.
- **Complete Cloud Integration**: Finalize the Power Automate integration to allow seamless interaction with cloud storage systems for real-time file retrieval and report generation.
- **Adaptive Learning Features**: Expand the AI to offer adaptive learning suggestions, ensuring that the system can respond to each student’s unique learning path.
- **Speech-Based AI**: Introduce voice interaction to further assist teachers and students by enabling hands-free commands and feedback.

---

EduLift is just the beginning—we're building the future of AI-powered education.



![WhatsApp Görsel 2025-02-23 saat 22 04 27_a6e2eaa0](https://github.com/user-attachments/assets/eeb5c67b-b8e2-401e-97e3-a5d816fbd3e0)
![WhatsApp Görsel 2025-02-23 saat 22 04 27_edb5efcf](https://github.com/user-attachments/assets/608c2578-1545-4a77-9026-6b5dbfc3ed36)
![WhatsApp Görsel 2025-02-23 saat 22 04 27_31153e85](https://github.com/user-attachments/assets/d4d1e9c5-4b95-40ba-b78b-5cf641d92c80)
