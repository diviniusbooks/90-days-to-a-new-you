import React, { useState } from 'react';

function App() {
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]); // Default to today
  const [formData, setFormData] = useState({}); // To store all user inputs

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Calculate deadlines based on start date
  const calculateDate = (days: number) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString();
  };

  const phase1End = calculateDate(30);
  const phase2End = calculateDate(60);
  const phase3End = calculateDate(90);

  return (
    <div className="workbook">
      <h1>From Burnt Out to Dream Life: Your Personal Reinvention Roadmap</h1>
      <h2>A 90-Day Transformation Workbook</h2>

      <section>
        <h2>Set Your Start Date</h2>
        <label>Start Date: </label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <p>Phase 1 Ends: {phase1End}</p>
        <p>Phase 2 Ends: {phase2End}</p>
        <p>Phase 3 Ends: {phase3End}</p>
      </section>

      <hr />

      <section>
        <h2>Welcome to Your New Beginning</h2>
        <p>This workbook is your personal guide to breaking free from burnout and designing the life you've always wanted. Over the next 90 days, you'll gain clarity on your dream life, remove mental and financial blockages, and create a step-by-step action plan to become the person you're meant to be.</p>
        <h3>What You'll Accomplish:</h3>
        <ul>
          <li>Crystal-clear vision of your dream life</li>
          <li>Identified and removed limiting beliefs about money and success</li>
          <li>A personalized 90-day roadmap to transformation</li>
          <li>New daily habits that support your reinvention</li>
          <li>Confidence in your ability to create lasting change</li>
        </ul>
      </section>

      <section>
        <h2>How to Use This Workbook</h2>
        <ol>
          <li><strong>Be Honest</strong>: Your answers are for you alone. The more truthful you are, the more powerful your transformation.</li>
          <li><strong>Take Your Time</strong>: Don't rush. Some sections deserve deep reflection.</li>
          <li><strong>Revisit Often</strong>: Your vision will evolve. Review and refine as you grow.</li>
          <li><strong>Take Action</strong>: Knowledge without action creates nothing. Complete every exercise.</li>
          <li><strong>Celebrate Progress</strong>: Acknowledge small wins. They compound into massive change.</li>
        </ol>
      </section>

      <hr />

      <section>
        <h2>PHASE 1: AWARENESS (Days 1-30)</h2>
        <h3>Understanding Where You Are Now</h3>

        <h3>Module 1: The Burnout Assessment</h3>

        <h4>Exercise 1.1: Rate Your Current Life</h4>
        <p>On a scale of 1-10 (1 = extremely dissatisfied, 10 = completely fulfilled), rate each area:</p>
        <label>Career/Work: <input type="number" name="career" min="1" max="10" onChange={handleInputChange} /></label><br />
        <label>Finances: <input type="number" name="finances" min="1" max="10" onChange={handleInputChange} /></label><br />
        <label>Health/Energy: <input type="number" name="health" min="1" max="10" onChange={handleInputChange} /></label><br />
        <label>Relationships: <input type="number" name="relationships" min="1" max="10" onChange={handleInputChange} /></label><br />
        <label>Personal Growth: <input type="number" name="personal_growth" min="1" max="10" onChange={handleInputChange} /></label><br />
        <label>Fun/Recreation: <input type="number" name="fun" min="1" max="10" onChange={handleInputChange} /></label><br />
        <label>Living Environment: <input type="number" name="living_env" min="1" max="10" onChange={handleInputChange} /></label><br />
        <label>Purpose/Meaning: <input type="number" name="purpose" min="1" max="10" onChange={handleInputChange} /></label><br />

        <h4>Reflection Questions:</h4>
        <ol>
          <li>Which areas scored lowest? Why do you think that is?<br /><textarea name="reflect1_1" onChange={handleInputChange}></textarea></li>
          <li>Which areas drain your energy the most?<br /><textarea name="reflect1_2" onChange={handleInputChange}></textarea></li>
          <li>If nothing changed, where will you be in 5 years?<br /><textarea name="reflect1_3" onChange={handleInputChange}></textarea></li>
        </ol>

        <h4>Exercise 1.2: Your Burnout Story</h4>
        <p>Write your current reality without judgment. Complete these prompts:</p>
        <label>"I feel burnt out because..."<br /><textarea name="burnout1" onChange={handleInputChange}></textarea></label><br />
        <label>"The moment I knew something had to change was when..."<br /><textarea name="burnout2" onChange={handleInputChange}></textarea></label><br />
        <label>"What I'm most tired of is..."<br /><textarea name="burnout3" onChange={handleInputChange}></textarea></label><br />
        <label>"What I'm afraid will happen if nothing changes..."<br /><textarea name="burnout4" onChange={handleInputChange}></textarea></label><br />

        <h4>Exercise 1.3: The Cost of Staying the Same</h4>
        <p>List 10 things you'll lose or miss if you don't change:</p>
        {Array.from({length: 10}, (_, i) => (
          <div key={i}><label>{i+1}. <input type="text" name={`cost_${i+1}`} onChange={handleInputChange} /></label></div>
        ))}

        <label>Truth Moment: How does reading this list make you feel? What emotion is rising?<br /><textarea name="truth_moment" onChange={handleInputChange}></textarea></label>
      </section>

      <section>
        <h3>Module 2: Uncovering Your Money Blocks</h3>

        <h4>Exercise 2.1: Money Beliefs Inventory</h4>
        <p>Check all statements you believe (even slightly):</p>
        <label><input type="checkbox" name="belief1" onChange={handleInputChange} /> "Money doesn't grow on trees"</label><br />
        <label><input type="checkbox" name="belief2" onChange={handleInputChange} /> "Rich people are greedy/selfish"</label><br />
        <label><input type="checkbox" name="belief3" onChange={handleInputChange} /> "I'm not good with money"</label><br />
        <label><input type="checkbox" name="belief4" onChange={handleInputChange} /> "You have to work hard to earn money"</label><br />
        <label><input type="checkbox" name="belief5" onChange={handleInputChange} /> "Money is the root of all evil"</label><br />
        <label><input type="checkbox" name="belief6" onChange={handleInputChange} /> "I don't deserve to be wealthy"</label><br />
        <label><input type="checkbox" name="belief7" onChange={handleInputChange} /> "Making money is difficult"</label><br />
        <label><input type="checkbox" name="belief8" onChange={handleInputChange} /> "People like me don't become successful"</label><br />
        <label><input type="checkbox" name="belief9" onChange={handleInputChange} /> "I'll never be rich"</label><br />
        <label><input type="checkbox" name="belief10" onChange={handleInputChange} /> "Money changes people for the worse"</label><br />

        <label>Count your checks: <input type="number" name="belief_count" onChange={handleInputChange} /> / 10</label><br />
        <p>The more you checked, the stronger your money blocks.</p>

        <h4>Exercise 2.2: Where Did These Beliefs Come From?</h4>
        <p>For each belief you checked, ask: "Who taught me this? When did I first hear this?"</p>
        <textarea name="belief_origins" onChange={handleInputChange} placeholder="Write your origins..."></textarea>

        <h4>Exercise 2.3: Money Block Breakthrough</h4>
        <p>For each limiting belief, create a new empowering truth:</p>
        <table>
          <thead><tr><th>Old Belief</th><th>New Truth</th></tr></thead>
          <tbody>
            {Array.from({length: 5}, (_, i) => (
              <tr key={i}>
                <td><input type="text" name={`old_belief_${i+1}`} onChange={handleInputChange} /></td>
                <td><input type="text" name={`new_truth_${i+1}`} onChange={handleInputChange} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Action Step: Write your new truths on sticky notes and place them where you'll see them daily (mirror, computer, wallet).</p>

        <h4>Quiz: How Ready Are You for Financial Transformation?</h4>
        <p>Answer True or False:</p>
        <ol>
          <li>I believe I can earn more than I currently make. <label>True <input type="radio" name="quiz2_1" value="T" onChange={handleInputChange} /></label> <label>False <input type="radio" name="quiz2_1" value="F" onChange={handleInputChange} /></label></li>
          <li>I'm willing to invest time in learning about money. <label>True <input type="radio" name="quiz2_2" value="T" onChange={handleInputChange} /></label> <label>False <input type="radio" name="quiz2_2" value="F" onChange={handleInputChange} /></label></li>
          <li>I deserve financial abundance. <label>True <input type="radio" name="quiz2_3" value="T" onChange={handleInputChange} /></label> <label>False <input type="radio" name="quiz2_3" value="F" onChange={handleInputChange} /></label></li>
          <li>Money is simply a tool, not good or evil. <label>True <input type="radio" name="quiz2_4" value="T" onChange={handleInputChange} /></label> <label>False <input type="radio" name="quiz2_4" value="F" onChange={handleInputChange} /></label></li>
          <li>I can change my financial situation. <label>True <input type="radio" name="quiz2_5" value="T" onChange={handleInputChange} /></label> <label>False <input type="radio" name="quiz2_5" value="F" onChange={handleInputChange} /></label></li>
          <li>Wealthy people can be kind and generous. <label>True <input type="radio" name="quiz2_6" value="T" onChange={handleInputChange} /></label> <label>False <input type="radio" name="quiz2_6" value="F" onChange={handleInputChange} /></label></li>
          <li>I'm open to new income opportunities. <label>True <input type="radio" name="quiz2_7" value="T" onChange={handleInputChange} /></label> <label>False <input type="radio" name="quiz2_7" value="F" onChange={handleInputChange} /></label></li>
          <li>My past doesn't determine my financial future. <label>True <input type="radio" name="quiz2_8" value="T" onChange={handleInputChange} /></label> <label>False <input type="radio" name="quiz2_8" value="F" onChange={handleInputChange} /></label></li>
        </ol>
        <p>Scoring: 6-8 True = Ready to transform | 4-5 True = Almost there, keep working | 0-3 True = Revisit Module 2 exercises</p>
      </section>

      <section>
        <h3>Module 3: Identifying Your Barriers</h3>

        <h4>Exercise 3.1: The Obstacle Audit</h4>
        <p>What's really holding you back? Check all that apply:</p>
        <h5>External Barriers:</h5>
        <label><input type="checkbox" name="ext_barrier1" onChange={handleInputChange} /> Lack of money to invest</label><br />
        <label><input type="checkbox" name="ext_barrier2" onChange={handleInputChange} /> No time (family/job obligations)</label><br />
        <label><input type="checkbox" name="ext_barrier3" onChange={handleInputChange} /> Don't know where to start</label><br />
        <label><input type="checkbox" name="ext_barrier4" onChange={handleInputChange} /> No support system</label><br />
        <label><input type="checkbox" name="ext_barrier5" onChange={handleInputChange} /> Current location/circumstances</label><br />
        <label>Other: <input type="text" name="ext_barrier_other" onChange={handleInputChange} /></label><br />

        <h5>Internal Barriers:</h5>
        <label><input type="checkbox" name="int_barrier1" onChange={handleInputChange} /> Fear of failure</label><br />
        <label><input type="checkbox" name="int_barrier2" onChange={handleInputChange} /> Fear of success</label><br />
        <label><input type="checkbox" name="int_barrier3" onChange={handleInputChange} /> Perfectionism ("not ready yet")</label><br />
        <label><input type="checkbox" name="int_barrier4" onChange={handleInputChange} /> Imposter syndrome</label><br />
        <label><input type="checkbox" name="int_barrier5" onChange={handleInputChange} /> Low self-confidence</label><br />
        <label><input type="checkbox" name="int_barrier6" onChange={handleInputChange} /> Procrastination</label><br />
        <label>Other: <input type="text" name="int_barrier_other" onChange={handleInputChange} /></label><br />

        <h4>Exercise 3.2: Barrier-Busting Strategy</h4>
        <p>For your top 3 barriers, create action plans:</p>
        {Array.from({length: 3}, (_, i) => (
          <div key={i}>
            <h5>Barrier #{i+1}: <input type="text" name={`barrier_${i+1}`} onChange={handleInputChange} /></h5>
            <label>Why this stops me: <textarea name={`barrier_why_${i+1}`} onChange={handleInputChange}></textarea></label><br />
            <label>One small action I can take this week to reduce this barrier: <textarea name={`barrier_action_${i+1}`} onChange={handleInputChange}></textarea></label><br />
            <label>Who or what could help me overcome this: <textarea name={`barrier_help_${i+1}`} onChange={handleInputChange}></textarea></label><br />
          </div>
        ))}

        <h4>Exercise 3.3: Your "Why Not Me?" Letter</h4>
        <p>Write a letter challenging your own excuses. Start with:</p>
        <p>"I've been telling myself I can't have my dream life because... But the truth is... Other people who started where I am have succeeded by... What if I'm wrong about my limitations? What if the only thing stopping me is me?"</p>
        <textarea name="why_not_me" onChange={handleInputChange}></textarea>
      </section>

      <hr />

      <section>
        <h2>PHASE 2: VISION (Days 31-60)</h2>
        <h3>Designing Your Dream Life</h3>

        <h3>Module 4: The Dream Life Blueprint</h3>

        <h4>Exercise 4.1: Your Perfect Day (5 Years from Now)</h4>
        <p>Close your eyes. Imagine you've achieved everything you want. Now, describe a typical Tuesday in vivid detail:</p>
        <textarea name="perfect_day" onChange={handleInputChange} placeholder='I wake up at ___ in my ___ (describe bedroom/home). The first thing I do is ___. ...'></textarea>
        <p>Be Specific: What do you see, hear, smell, taste, touch? Who's with you? What are you wearing?</p>

        <h4>Exercise 4.2: Life Categories Deep Dive</h4>
        <p>For each area, describe your dream state in detail:</p>
        <h5>Career/Business:</h5>
        <label>What work am I doing? <textarea name="career_what" onChange={handleInputChange}></textarea></label><br />
        <label>How much am I earning? <textarea name="career_earning" onChange={handleInputChange}></textarea></label><br />
        <label>What impact am I making? <textarea name="career_impact" onChange={handleInputChange}></textarea></label><br />
        <label>How does my work feel? <textarea name="career_feel" onChange={handleInputChange}></textarea></label><br />

        <h5>Finances:</h5>
        <label>What's my monthly income? <textarea name="finances_income" onChange={handleInputChange}></textarea></label><br />
        <label>What's in my bank account? <textarea name="finances_bank" onChange={handleInputChange}></textarea></label><br />
        <label>What can I afford without worry? <textarea name="finances_afford" onChange={handleInputChange}></textarea></label><br />
        <label>How do I feel about money? <textarea name="finances_feel" onChange={handleInputChange}></textarea></label><br />

        {/* Similar for other categories: Health/Body, Relationships, Personal Growth, Lifestyle, Legacy/Purpose */}
        {/* Omitting for brevity, add similarly */}

        <h4>Exercise 4.3: The Vision Board Worksheet</h4>
        <p>Even if you don't create a physical board, list images/words that represent your dream:</p>
        <h5>Images I'd Include:</h5>
        {Array.from({length: 5}, (_, i) => (
          <div key={i}><label>{i+1}. <input type="text" name={`image_${i+1}`} onChange={handleInputChange} /></label></div>
        ))}

        <h5>Words/Phrases:</h5>
        {Array.from({length: 5}, (_, i) => (
          <div key={i}><label>{i+1}. <input type="text" name={`word_${i+1}`} onChange={handleInputChange} /></label></div>
        ))}

        <h5>Feelings I Want to Experience:</h5>
        {Array.from({length: 3}, (_, i) => (
          <div key={i}><label>{i+1}. <input type="text" name={`feeling_${i+1}`} onChange={handleInputChange} /></label></div>
        ))}

        <h4>Quiz: Is This Really YOUR Dream?</h4>
        <ol>
          <li>Would I still want this if no one ever knew about it? <label>Yes <input type="radio" name="quiz4_1" value="Y" onChange={handleInputChange} /></label> <label>No <input type="radio" name="quiz4_1" value="N" onChange={handleInputChange} /></label></li>
          {/* Add other quiz questions similarly */}
        </ol>
        <p>Reality Check: If you answered No to #1 or #4, or Yes to #3, revisit your vision. Make sure you're designing YOUR dream, not someone else's expectations.</p>
      </section>

      {/* Continue with other modules, phases, using similar patterns for inputs, textareas, checkboxes, radios, tables */}
      {/* For trackers, use tables with inputs or checkboxes */}
      {/* For habit tracker, use a grid of checkboxes */}

      {/* Example for Habit Tracker */}
      <section>
        <h2>Habit Tracker (30 Days)</h2>
        <h3>Habit #1: <input type="text" name="habit1" onChange={handleInputChange} /></h3>
        <table>
          <tbody>
            <tr>
              {Array.from({length: 15}, (_, i) => (
                <td key={i}><label>{i+1} <input type="checkbox" name={`habit1_day${i+1}`} onChange={handleInputChange} /></label></td>
              ))}
            </tr>
            <tr>
              {Array.from({length: 15}, (_, i) => (
                <td key={i+15}><label>{i+16} <input type="checkbox" name={`habit1_day${i+16}`} onChange={handleInputChange} /></label></td>
              ))}
            </tr>
          </tbody>
        </table>
        {/* Repeat for Habit #2 and #3 */}
      </section>

      {/* Add remaining sections similarly. Due to length, this is a template. Expand as needed. */}

      <button onClick={() => console.log(formData)}>Save Progress (Console Log for Now)</button>
    </div>
  );
}

export default App;
