function getTotalWorkingHours() {
    const startDate = new Date(2020,1,11);
    const endDate = new Date();
    console.log(startDate, endDate)

    const workingHoursPerDay = 8;

    const totalTimeDiffInMs = endDate - startDate;
    const totalTimeDiffInHours = totalTimeDiffInMs / 1000 / 60 / 60;

    const totalDays = Math.floor(totalTimeDiffInHours / 24);
    const totalWorkingHours = totalDays * workingHoursPerDay;

    const startTime = startDate.getHours();
    const endTime = endDate.getHours();
    const totalNonWorkingHours = (24 - endTime) + startTime;

    const totalWorkingHoursBetweenDates = totalWorkingHours - totalNonWorkingHours;
    console.log(totalWorkingHoursBetweenDates)
    return totalWorkingHoursBetweenDates;
}
