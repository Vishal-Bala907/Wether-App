let reduceHourData = (data) => {
  const currntHour = new Date().getHours().toString();
  let reducedData = data.filter(
    (time) => currntHour <= time.datetime.split(":")[0]
  );

  return reducedData;
};

export { reduceHourData };
