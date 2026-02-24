let habits = [
  { id: 1, title: "Drink water", days: 3 },
  { id: 2, title: "Morning walk", days: 5 }
];

function showHabits() {
  console.log(habits);
}

function addHabit(title) {
  let newHabit = {
    id: Date.now(),
    title: title,
    days: 0
  };
  habits.push(newHabit);
}

function markDone(id) {
  let habit = habits.find(h => h.id == id);
  if (habit) {
    habit.days += 1;
  }
}

function resetHabit(id) {
  let habit = habits.find(h => h.id == id);
  if (habit) {
    habit.days = 0;
  }
}

function removeHabit(id) {
  habits = habits.filter(h => h.id != id);
}

function showBestHabit() {
  let best = habits[0];
  for (let i = 1; i < habits.length; i++) {
    if (habits[i].days > best.days) {
      best = habits[i];
    }
  }
  console.log(best);
}

addHabit("Read book");
markDone(habits[0].id);
markDone(habits[0].id);
resetHabit(habits[1].id);
removeHabit(2);
showHabits();
showBestHabit();
