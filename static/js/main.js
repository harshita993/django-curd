document.addEventListener("DOMContentLoaded", () => {
    // Function to open modals
    function openModal(modalId) {
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.style.display = "block";
            modal.classList.add("show");
        } else {
            console.error(`Modal with ID "${modalId}" not found.`);
        }
    }

    // Function to close modals
    function closeModal(modal) {
        if (modal) {
            modal.style.display = "none";
            modal.classList.remove("show");
        }
    }

    // Add Modal
    const addModalTrigger = document.querySelector('.btn-success[data-bs-toggle="modal"]');
    if (addModalTrigger) {
        addModalTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            openModal("#addEmployeeModal");
        });
    }

    // Edit Modal
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const modalId = button.getAttribute("href");
            openModal(modalId);
        });
    });

    // Close Modal Buttons
    const closeButtons = document.querySelectorAll("[data-bs-dismiss='modal']");
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            closeModal(modal);
        });
    });

    // Close modal on outside click
    window.addEventListener("click", (event) => {
        const modals = document.querySelectorAll(".modal.show");
        modals.forEach((modal) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Tooltip Initialization (optional, requires jQuery)
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();

        const checkbox = $("table tbody input[type='checkbox']");
        $("#selectAll").click(function() {
            checkbox.prop("checked", this.checked);
        });

        checkbox.click(function() {
            if (!this.checked) {
                $("#selectAll").prop("checked", false);
            }
        });
    });

    // Form Submission Handling
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Form submitted successfully!");
            form.submit();
        });
    });
}); // Delete Modal
const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent URL change
        const modalId = button.getAttribute("href");
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.style.display = "block";
            modal.classList.add("show");
        } else {
            console.error(`Modal with ID "${modalId}" not found.`);
        }
    });
});