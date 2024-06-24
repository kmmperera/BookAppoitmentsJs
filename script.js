document.addEventListener('DOMContentLoaded', function() {
    const timeSlots = {
        '2024-06-24': ['10:00', '11:00', '14:00', '15:00'],
        '2024-06-25': ['09:00', '10:00', '13:00', '16:00'],
        // Add more dates and time slots as needed
    };

    const bookingForm = document.getElementById('booking-form');
    const bookingDateInput = document.getElementById('booking-date');
    const timeSlotsContainer = document.getElementById('time-slots-container');
    const bookingResult = document.getElementById('booking-result');

    bookingDateInput.addEventListener('change', function() {
        const selectedDate = bookingDateInput.value;
        timeSlotsContainer.innerHTML = '';

        if (timeSlots[selectedDate]) {
            timeSlots[selectedDate].forEach(function(slot) {
                const timeSlotDiv = document.createElement('div');
                timeSlotDiv.classList.add('time-slot');
                timeSlotDiv.innerHTML = `
                    <input type="radio" name="time" value="${slot}" required>
                    <label>${slot}</label>
                `;
                timeSlotsContainer.appendChild(timeSlotDiv);
            });
        } else {
            timeSlotsContainer.innerHTML = '<p>No available time slots for the selected date.</p>';
        }
    });

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(bookingForm);
        const bookingData = {
            date: formData.get('booking-date'),
            time: formData.get('time'),
            name: formData.get('name'),
            email: formData.get('email')
        };

        // Simulate saving data to the server
        setTimeout(function() {
            // Simulate success response
            const success = true;

            if (success) {
                bookingResult.innerHTML = '<p>Booking successful! You will receive a confirmation email shortly.</p>';
                bookingForm.reset();
                timeSlotsContainer.innerHTML = '';
            } else {
                bookingResult.innerHTML = '<p>Booking failed. Please try again.</p>';
            }
        }, 1000);
    });
});
