() => {
  const [startDate, setStartDate] = useState(null);

  const filterDate = (date) => {
    return (
      isAfter(date, subMonths(new Date(), 4)) && isBefore(date, new Date())
    );
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MM/yyyy"
      yearDropdownItemNumber={25}
      filterDate={filterDate}
      showMonthYearPicker
      showYearDropdown
      scrollableYearDropdown
      strictParsing
    />
  );
};
