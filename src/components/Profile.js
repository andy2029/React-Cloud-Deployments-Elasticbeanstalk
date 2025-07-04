import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';

const Profile = () => {
  const savedUser = localStorage.getItem('user');
  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    password: user ? user.password : '',
    signupDate: user ? user.signupDate : '',
    age: user ? user.age : '',
    weight: user ? user.weight : '',
    height: user ? user.height : '',
    activityLevel: user ? user.activityLevel : '',
    dietaryPreferences: user ? user.dietaryPreferences : '',
    healthGoals: user ? user.healthGoals : '',
    goal: user ? user.goal : 'Weight Loss'
  });
  const [dietPlan, setDietPlan] = useState(null);

  const generateDietPlan = () => {
    let dietPlanObject = [
      {
        goal: 'Weight Loss',
        planDescription:
          [
            'Increase intake of lean protein products such as chicken, turkey, beef, and eggs.',
            'Include plenty of fruits and vegetables for essential vitamins and minerals to diet.',
            'Limit processed foods and sugary beverages.',
            'Drink plenty of water throughout the day.'
          ],
      },
      {
        goal: 'Muscle Gain',
        planDescription: [
          'Consume sufficient protein to support muscle growth, such as lean meats, eggs, and dairy.',
          'Include carbohydrates like whole grains, oats, and sweet potatoes for energy.',
          'Focus on strength training exercises to stimulate muscle growth.',
          'Ensure proper hydration and rest for recovery.'
        ]
      },
      {
        goal: 'Overall Health Improvement',
        planDescription: [
          'Aim for a balanced diet with a variety of high nutrient foods.',
          'Include sources of healthy fats like avocados, nuts, and olive oil.',
          'Incorporate regular physical activities into your routine, such as walking, jogging, or cycling.',
          'Limit consumption of processed foods and focus on whole, unprocessed foods'
        ]
      }
    ];
    setDietPlan(dietPlanObject);
  }

  //Function to handle user input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validate email address
  const validateEmail = (email) => {
    const re = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
    return re.test(email);
  };

  // Function to handle editing
  const handleEdit = () => {
    setEditing(true);
  };

  // Function to handle saving form data
  const handleSave = () => {
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address')
      return;
    }

    localStorage.setItem('user', JSON.stringify(formData));
    setUser(formData);
    setEditing(false);
    alert('Profile updated successfully.');
  };

  // Function to delete user data
  const handleDelete = () => {
    localStorage.removeItem('user');
    setUser(null);
    alert('User deleted successfully.');
  };

  if (!user) {
    return <div className="profile">User not found.</div>;
  }

  return (
    <div className="profile">
      <h2>User Profile</h2>
      {editing ? (
        <div className="form">
          <h3>Edit Profile</h3>

          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} required />

            <label for="weight">Weight (kg):</label>
            <input type="number" id="weight" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleInputChange} required />

            <label for="height">Height (cm):</label>
            <input type="number" id="height" name="height" placeholder="Height (cm)" value={formData.height} onChange={handleInputChange} required />

            <label for="activityLevel">Activity Level:</label>
            <input type="text" id="activityLevel" name="activityLevel" placeholder="Activity Level" value={formData.activityLevel} onChange={handleInputChange} required />

            <label for="dietaryPreferences">Dietary Preferences:</label>
            <input type="text" id="dietaryPreferences" name="dietaryPreferences" placeholder="Dietary Preferences" value={formData.dietaryPreferences} onChange={handleInputChange} required />

            <label for="dietaryRestrictions">Dietary Restrictions:</label>
            <input type="text" id="dietaryRestrictions" name="dietaryRestrictions" placeholder="Dietary Restrictions" value={formData.dietaryRestrictions} onChange={handleInputChange} required />

            <label for="healthGoals">Health Goals:</label>
            <input type="text" id="healthGoals" name="healthGoals" placeholder="Health Goals" value={formData.healthGoals} onChange={handleInputChange} required />

            <label for="goals">Health Goals:</label>
            <select name="goal" id="goals" value={formData.goal} onChange={handleInputChange}>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="Overall Health Improvement">Overall Health Improvement</option>
            </select>

            <button type="button" onClick={handleSave}>Save</button>
          </form>
        </div>
      ) : (
        <div className="user-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Date of Joining:</strong> {user.signupDate}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Weight:</strong> {user.weight}</p>
          <p><strong>Height:</strong> {user.height}</p>
          <p><strong>Activity Level:</strong> {user.activityLevel}</p>
          <p><strong>Dietary Preferences:</strong> {user.dietaryPreferences}</p>
          <p><strong>Health Goals:</strong> {user.healthGoals}</p>
          <p><strong>Goal:</strong> {user.goal}</p>

          <br />

          <p><strong>Info:</strong></p>
          <p>We will use this information to recommend food based on your Age, weight, activity levels and health goals, we will use this data to calculate caloric intake, use this to generate a health score and help you with your health goals.</p>

          {/* Looping through the diet plan description in the JSON dietPlan object to match user selected goal to show a customised plan. */}
          {dietPlan ? <>
            <p><strong>Diet Plan:</strong></p>
            <ol>
              {dietPlan
                .find((item) => item.goal === formData.goal)
                .planDescription.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
            </ol>
          </> : null}

          <Button variant="primary" style={{ marginRight: 5 }} onClick={handleEdit}>Edit</Button>
          <Button variant="danger" style={{ marginRight: 5 }} onClick={handleDelete}>Delete</Button>
          <Button variant="success" onClick={generateDietPlan}>Generate Diet Plan</Button>

        </div>
      )}
    </div>
  );
}

export default Profile;