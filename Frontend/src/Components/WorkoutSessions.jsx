import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        A good workout plan combines cardio, strength training, and flexibility, with rest days for 
        recovery. It should gradually increase in intensity to challenge the body while allowing time for muscle growth and injury prevention.
        </p>
        <img src='./img5.jpg' alt='workout'/>
      </div>
      <div className="wrapper">
        <h1>WORKOUT PLANS</h1>
        <p>
        A 4-day training routine with a push, pull, arms, and legs split, followed by a rest period after every 4 days,
         helps ensure balanced muscle development and adequate recovery.
        </p>
        <div className="bootcamps">
          <div>
            <h4>DAY 1 - PUSH DAY</h4>
            <p>
            Warm-up, Bench Press– 3 sets of 8-12 reps, 
            Overhead Shoulder Press – 3 sets of 8-12 reps,
            Incline Dumbbell Press – 3 sets of 8-12 reps,
            Lateral Raises – 3 sets of 12-15 reps,
            Cool-down: Stretch chest and shoulders.
            </p>
          </div>
          <div>
            <h4>DAY 2 - PULL DAY</h4>
            <p>
            Warm-up,
            Lat Pulldowns – 3 sets of 8-12 reps,
            Bent-over Rows – 3 sets of 8-12 reps,
            Dumbbell Rows – 3 sets of 8-12 reps (per arm),
            Face Pulls – 3 sets of 12-15 reps,
            Cool-down: Stretch back and shoulders.
            </p>
          </div>
          <div>
            <h4>DAY 3 - ARMS DAY </h4>
            <p>
            Warm-up,
            Barbell Bicep Curls – 3 sets of 8-12 reps,
            Tricep Dips – 3 sets of 10-15 reps,
            Hammer Curls – 3 sets of 8-12 reps,
            Overhead Tricep Extensions – 3 sets of 8-12 reps,
            Preacher Curls (or Dumbbell Bicep Curls) – 3 sets of 8-12 reps,
            Tricep Pushdowns – 3 sets of 10-15 reps,
            Cool-down: Stretch arms and shoulders.
            </p>
          </div>
          <div>
            <h4>DAY 4 - LEGS DAY</h4>
            <p>
            Warm-up,
            Squats (Barbell or Bodyweight) – 4 sets of 8-12 reps,
            Leg Press – 3 sets of 10-12 reps,
            Leg Extension – 3 sets of 12-15 reps,
            Leg Curls (Machine or Dumbbell) – 3 sets of 10-15 reps,
            Calf Raises (Standing or Seated) – 4 sets of 15-20 reps,
            Cool-down: Stretch quads, hamstrings, glutes, and calves.
            </p>
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default WorkoutSessions
