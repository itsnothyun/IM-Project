const content = {
    home: `
        <div class="home-content text-center">
            <h1 class="display-4">Welcome to Wellmeadows Hospital</h1>
            <p class="lead">Providing the best healthcare services for you.</p>
            <p>Wellmeadows Hospital is dedicated to providing top-notch healthcare services to our community. Our experienced staff and state-of-the-art facilities ensure that you receive the best care possible.</p>
        </div>
    `,
    staff_details: `
        <div class="container mt-5">
            <div class="text-center">
                <h1 class="display-4">Wellmeadows Hospital</h1>
                <p class="lead">Staff Form</p>
                <div class="staff-number-box">
                    <label for="staffNumber">Staff Number:</label>
                    <select id="staffNumber" class="form-control" onchange="fetchAllStaffDetails()">
                        <!-- Options will be populated from the database -->
                    </select>
                </div>
            </div>
            <div class="card mt-4">
                <div class="card-body">
                    <h3 class="card-title">Personal Details</h3>
                    <p>First Name: <span id="staffFirstName"></span></p>
                    <p>Last Name: <span id="staffLastName"></span></p>
                    <p>Address: <span id="staffAddress"></span></p>
                    <p>Sex: <span id="staffSex"></span></p>
                    <p>Date of Birth: <span id="staffDOB"></span></p>
                    <p>Tel. No.: <span id="staffPhone"></span></p>
                    <p>NIN: <span id="staffNIN"></span></p>
                    <p>Position: <span id="staffPosition"></span></p>
                    <p>Allocated: <span id="staffAllocated"></span></p>
                    <p>Current Salary: <span id="staffCurrentSalary"></span></p>
                    <p>Salary Scale: <span id="staffSalaryScale"></span></p>
                    <p>Paid weekly or Monthly: <span id="staffPaymentFrequency"></span></p>
                    <p>Hours/Week: <span id="staffHoursPerWeek"></span></p>
                    <p>Permanent or Temporary: <span id="staffEmploymentType"></span></p>
                </div>
            </div>
            
            <div class="card mt-4">
                <div class="card-body">
                    <h3 class="card-title">Qualifications</h3>
                    <p>Type: <span id="staffQualificationType"></span></p>
                    <p>Date: <span id="staffQualificationDate"></span></p>
                    <p>Institution: <span id="staffInstitution"></span></p>
                </div>
            </div>

            <div class="card mt-4">
                <div class="card-body">
                    <h3 class="card-title">Work Experience</h3>
                    <p>Position: <span id="staffWorkPosition"></span></p>
                    <p>Start Date: <span id="staffStartDate"></span></p>
                    <p>Finish Date: <span id="staffFinishDate"></span></p>
                    <p>Organization: <span id="staffOrganization"></span></p>
                </div>
            </div>
        </div>
    `,
    ward_details: `
        <main class="page allocation-page">
        <div class="card mt-4">
            <div class="card-body">
                    <div class="container">
                        <div class="block-heading">
                            <h1 class="display-4">Ward Details</h1>
                            <p>Week Beginning: 16-Jan-96</p>
                        </div>
                         <div class="details-container row">
                        <div class="details-column col-md-6">
                            <h3 class="title">Ward Number: 
                                <select id="wardNumber" class="form-control" onchange="fetchAllWardDetails()">
                                    <!-- Options will be populated from the database -->
                                </select>
                            </h3>
                            <h3 class="title">Ward Name: <span id="wardName"></span></h3>
                            <h3 class="title">Location: <span id="location"></span></h3>
                        </div>
                        <div class="details-column col-md-6">
                            <h3 class="title">Charge Nurse: <span id="chargeNurse"></span></h3>
                            <h3 class="title">Staff Number: <span id="staffNumber"></span></h3>
                            <h3 class="title">Tel Extn: <span id="telExtn"></span></h3>
                        </div>
                    </div>
                    <div class="table-responsive mt-4">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Patient Number</th>
                                    <th>Name</th>
                                    <th>On Waiting List</th>
                                    <th>Expected Stay (Days)</th>
                                    <th>Date Placed</th>
                                    <th>Date Leave</th>
                                    <th>Actual Leave</th>
                                    <th>Bed Number</th>
                                </tr>
                            </thead>
                            <tbody id="wardDetailsTable">
                                <!-- Rows will be populated dynamically -->
                            </tbody>
                        </table>
                    </div>
                    </div>
            </div> 
        </div> 
        </main>
    `,
    patient_details: `
        <div class="container mt-5">
                <div class="text-center">
                    <h1 class="display-4">Patient Details</h1>
                    <p class="lead">Details of the patients admitted.</p>
        </div>
         <div class="container mt-5">
            <div class="text-center">
                <div class="staff-number-box">
                    <label for="patient_id">Patient Number</label>
                    <select id="patient_id" class="form-control">
                        <!-- Options will be populated from the database -->
                    </select>
                </div>
            </div>
            <div class="card mt-4">
                <div class="card-body">
                    <h3 class="card-title">Personal Details</h3>
                    <p>First Name: <span id="firstName"></span></p>
                    <p>Last Name: <span id="lastName"></span></p>
                    <p>Address: <span id="address"></span></p>
                    <p>Sex: <span id="sex"></span></p>
                    <p>Date of Birth: <span id="dob"></span></p>
                    <p>Phone: <span id="phone"></span></p>
                    <p>Marital Status: <span id="marital"></span></p>
                    <p>Date Registered: <span id="dateRegistered"></span></p>
                </div>
            </div>
            <div class="card mt-4">
                <div class="card-body">
                    <h3 class="card-title">Next of Kin</h3>
                    <p>Name: <span id="kinName"></span></p>
                    <p>Relationship: <span id="kinRelationship"></span></p>
                    <p>Address: <span id="kinAddress"></span></p>
                    <p>Phone: <span id="kinPhone"></span></p>
                </div>
            </div>
            <div class="card mt-4">
                <div class="card-body">
                    <h3 class="card-title">Local Doctor</h3>
                    <p>Name: <span id="doctorName"></span></p>
                    <p>Address: <span id="doctorAddress"></span></p>
                    <p>Phone: <span id="doctorPhone"></span></p>
                </div>
            </div>
            <div class="card mt-4">
                <div class="card-body">
                    <h3 class="card-title">Patient Allocation</h3>
                    <p>Week Beginning: <span id="weekBeginning"></span></p>
                    <div class="details-container row">
                        <div class="details-column col-md-6">
                            <h3 class="title">Ward Number: <span id="wardNumber"></span></h3>
                            <h3 class="title">Ward Name: <span id="wardName"></span></h3>
                            <h3 class="title">Location: <span id="location"></span></h3>
                        </div>
                        <div class="details-column col-md-6">
                            <h3 class="title">Charge Nurse: <span id="chargeNurse"></span></h3>
                            <h3 class="title">Staff Number: <span id="staffNumber"></span></h3>
                            <h3 class="title">Tel Extn: <span id="telExtn"></span></h3>
                        </div>
                    </div>
                    <div class="table-responsive mt-4">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Patient Number</th>
                                    <th>Name</th>
                                    <th>On Waiting List</th>
                                    <th>Expected Stay (Days)</th>
                                    <th>Date Placed</th>
                                    <th>Date Leave</th>
                                    <th>Actual Leave</th>
                                    <th>Bed Number</th>
                                </tr>
                            </thead>
                            <tbody id="patientAllocationTable">
                                <!-- Rows will be populated dynamically -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card mt-4">
                <div class="card-body">
                    <h3 class="card-title">Patient Medication</h3>
                    <p>Patient Number: <span id="medPatientNumber"></span></p>
                    <p>Full Name: <span id="medFullName"></span></p>
                    <p>Bed Number: <span id="medBedNumber"></span></p>
                    <p>Ward Number: <span id="medWardNumber"></span></p>
                    <p>Ward Name: <span id="medWardName"></span></p>
                    <div class="table-responsive mt-4">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Drug Number</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Dosage</th>
                                    <th>Method of Admin</th>
                                    <th>Units per Day</th>
                                    <th>Start Date</th>
                                    <th>Finish Date</th>
                                </tr>
                            </thead>
                            <tbody id="patientMedicationTable">
                                <!-- Rows will be populated dynamically -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `,
    drug_details: `
        <div class="card mt-4">
            <div class="card-body">
                <div class="text-center">
                    <h1 class="display-4">Drug Details</h1>
                    <p class="lead">Information about available drugs.</p>
                </div>
                <div class="table-responsive mt-4">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Dosage (Drugs Only)</th>
                                <th>Method of Admin</th>
                                <th>Cost per Unit</th>
                            </tr>
                        </thead>
                        <tbody id="drugDetailsTable">
                            <tr>
                                <td>
                                    <select id="drug-name" name="drug-name">
                                        <!-- Add more options as needed -->
                                        <option value="ibuprofen">Ibuprofen</option>
                                        <option value="aspirin">Aspirin</option>
                                        <option value="acetaminophen">Acetaminophen</option>
                                        <option value="amoxicillin">Amoxicillin</option>
                                        <option value="atorvastatin">Atorvastatin</option>
                                        <option value="omeprazole">Omeprazole</option>
                                        <option value="metformin">Metformin</option>
                                        <option value="losartan">Losartan</option>
                                        <option value="lisinopril">Lisinopril</option>
                                        <option value="levothyroxine">Levothyroxine</option>
                                        <option value="simvastatin">Simvastatin</option>
                                        <option value="clopidogrel">Clopidogrel</option>
                                        <option value="montelukast">Montelukast</option>
                                        <option value="albuterol">Albuterol</option>
                                        <option value="gabapentin">Gabapentin</option>
                                        <option value="hydrochlorothiazide">Hydrochlorothiazide</option>
                                        <option value="hydrocodone">Hydrocodone</option>
                                        <option value="sertraline">Sertraline</option>
                                        <option value="tramadol">Tramadol</option>
                                        <option value="zolpidem">Zolpidem</option>
                                    </select>
                                </td>
                                <td><span id="description"></span></td>
                                <td><span id="dosage"></span></td>
                                <td><span id="method-of-admin"></span></td>
                                <td><span id="cost-per-unit"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    help: `
        <div class="text-center">
            <h1 class="display-4">Help</h1>
            <p class="lead">Get help and support here.</p>
        </div>
    `,
    settings: `
        <div class="text-center">
            <h1 class="display-4">Settings</h1>
            <p class="lead">Adjust your settings here.</p>
        </div>
    `
};

function loadContent(page) {
    document.getElementById('content').innerHTML = content[page];
    if (page === 'staff_details') {
        fetchStaffNumbers();
    } else if (page === 'ward_details') {
        fetchWardNumbers();
    } else if (page === 'patient_details') {
        fetchPatientNumbers();
        fetchPatientDetails();
    } else if (page === 'drug_details') {
        fetchAllDrugDetails();
    }
}

function fetchStaffNumbers() {
    fetch('/api/getStaffNumbers')
        .then(response => response.json())
        .then(data => {
            const staffNumberSelect = document.getElementById('staffNumber');
            data.forEach(staff => {
                const option = document.createElement('option');
                option.value = staff.staffNumber;
                option.text = staff.staffNumber;
                staffNumberSelect.add(option);
            });
        })
        .catch(error => console.error('Error fetching staff numbers:', error));
}

function fetchWardNumbers() {
    fetch('/api/getWardNumbers')
        .then(response => response.json())
        .then(data => {
            const wardNumberSelect = document.getElementById('wardNumber');
            data.forEach(ward => {
                const option = document.createElement('option');
                option.value = ward.wardNumber;
                option.text = ward.wardNumber;
                wardNumberSelect.add(option);
            });
        })
        .catch(error => console.error('Error fetching ward numbers:', error));
}

function fetchPatientNumbers() {
    fetch('/api/getPatientNumbers')
        .then(response => response.json())
        .then(data => {
            const patientNumberSelect = document.getElementById('patient_id');
            data.forEach(patient => {
                const option = document.createElement('option');
                option.value = patient.patient_id;
                option.text = patient.patient_id;
                patientNumberSelect.add(option);
            });
        })
        .catch(error => console.error('Error fetching patient numbers:', error));
}

function fetchPatientDetails() {
    fetch('/api/getPatientDetails')
        .then(response => response.json())
        .then(data => {
            // Populate patient registration form
            document.getElementById('patient_id').textContent = data.patient_id;
            document.getElementById('firstName').textContent = data.first_name;
            document.getElementById('lastName').textContent = data.last_name;
            document.getElementById('address').textContent = data.address;
            document.getElementById('sex').textContent = data.sex;
            document.getElementById('dob').textContent = data.dob;
            document.getElementById('phone').textContent = data.phone;
            document.getElementById('marital').textContent = data.marital_status;
            document.getElementById('dateRegistered').textContent = data.date_registered;

            // Populate next of kin details
            document.getElementById('kinName').textContent = data.kin_name;
            document.getElementById('kinRelationship').textContent = data.kin_relationship;
            document.getElementById('kinAddress').textContent = data.kin_address;
            document.getElementById('kinPhone').textContent = data.kin_phone;

            // Populate local doctor details
            document.getElementById('doctorName').textContent = data.doctor_name;
            document.getElementById('doctorAddress').textContent = data.doctor_address;
            document.getElementById('doctorPhone').textContent = data.doctor_phone;

            // Populate patient allocation details
            document.getElementById('weekBeginning').textContent = data.week_beginning;
            document.getElementById('wardNumber').textContent = data.ward_number;
            document.getElementById('wardName').textContent = data.ward_name;
            document.getElementById('location').textContent = data.location;
            document.getElementById('chargeNurse').textContent = data.charge_nurse;
            document.getElementById('staffNumber').textContent = data.staff_number;
            document.getElementById('telExtn').textContent = data.tel_extn;

            // Populate patient allocation table
            const patientAllocationTable = document.getElementById('patientAllocationTable');
            data.patient_allocations.forEach(allocation => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${allocation.patient_number}</td>
                    <td>${allocation.name}</td>
                    <td>${allocation.on_waiting_list}</td>
                    <td>${allocation.expected_stay_days}</td>
                    <td>${allocation.date_placed}</td>
                    <td>${allocation.date_leave}</td>
                    <td>${allocation.actual_leave}</td>
                    <td>${allocation.bed_number}</td>
                `;
                patientAllocationTable.appendChild(row);
            });

            // Populate patient medication details
            document.getElementById('medPatientNumber').textContent = data.med_patient_number;
            document.getElementById('medFullName').textContent = data.med_full_name;
            document.getElementById('medBedNumber').textContent = data.med_bed_number;
            document.getElementById('medWardNumber').textContent = data.med_ward_number;
            document.getElementById('medWardName').textContent = data.med_ward_name;

            // Populate patient medication table
            const patientMedicationTable = document.getElementById('patientMedicationTable');
            data.medications.forEach(medication => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${medication.drug_number}</td>
                    <td>${medication.name}</td>
                    <td>${medication.description}</td>
                    <td>${medication.dosage}</td>
                    <td>${medication.method_of_admin}</td>
                    <td>${medication.units_per_day}</td>
                    <td>${medication.start_date}</td>
                    <td>${medication.finish_date}</td>
                `;
                patientMedicationTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching patient details:', error));
}

function fetchAllStaffDetails() {
    const staffNumber = document.getElementById('staffNumber').value;
    fetch(`/api/getAllStaffDetails?staffNumber=${staffNumber}`)
        .then(response => response.json())
        .then(data => {
            // Populate staff details
            document.getElementById('staffFirstName').textContent = data.first_name;
            document.getElementById('staffLastName').textContent = data.last_name;
            document.getElementById('staffAddress').textContent = data.address;
            document.getElementById('staffSex').textContent = data.sex;
            document.getElementById('staffDOB').textContent = data.dob;
            document.getElementById('staffPhone').textContent = data.phone;
            document.getElementById('staffNIN').textContent = data.nin;
            document.getElementById('staffPosition').textContent = data.position;
            document.getElementById('staffAllocated').textContent = data.allocated;
            document.getElementById('staffCurrentSalary').textContent = data.current_salary;
            document.getElementById('staffSalaryScale').textContent = data.salary_scale;
            document.getElementById('staffPaymentFrequency').textContent = data.payment_frequency;
            document.getElementById('staffHoursPerWeek').textContent = data.hours_per_week;
            document.getElementById('staffEmploymentType').textContent = data.employment_type;

            // Populate staff qualifications
            document.getElementById('staffQualificationType').textContent = data.qualification_type;
            document.getElementById('staffQualificationDate').textContent = data.qualification_date;
            document.getElementById('staffInstitution').textContent = data.institution;

            // Populate staff work experience
            document.getElementById('staffWorkPosition').textContent = data.work_position;
            document.getElementById('staffStartDate').textContent = data.start_date;
            document.getElementById('staffFinishDate').textContent = data.finish_date;
            document.getElementById('staffOrganization').textContent = data.organization;
        })
        .catch(error => console.error('Error fetching staff details:', error));
}

function fetchAllWardDetails() {
    const wardNumber = document.getElementById('wardNumber').value;
    fetch(`/api/getAllWardDetails?wardNumber=${wardNumber}`)
        .then(response => response.json())
        .then(data => {
            // Populate week beginning
            document.getElementById('weekBeginning').textContent = data.week_beginning;

            // Populate ward details
            document.getElementById('wardName').textContent = data.ward_name;
            document.getElementById('location').textContent = data.location;
            document.getElementById('chargeNurse').textContent = data.charge_nurse;
            document.getElementById('staffNumber').textContent = data.staff_number;
            document.getElementById('telExtn').textContent = data.tel_extn;

            // Populate ward details table
            const wardDetailsTable = document.getElementById('wardDetailsTable');
            wardDetailsTable.innerHTML = ''; // Clear existing rows
            data.ward_details.forEach(detail => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${detail.patient_number}</td>
                    <td>${detail.name}</td>
                    <td>${detail.on_waiting_list}</td>
                    <td>${detail.expected_stay_days}</td>
                    <td>${detail.date_placed}</td>
                    <td>${detail.date_leave}</td>
                    <td>${detail.actual_leave}</td>
                    <td>${detail.bed_number}</td>
                `;
                wardDetailsTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching ward details:', error));
}

function fetchAllDrugDetails() {
    fetch('/api/getAllDrugDetails')
        .then(response => response.json())
        .then(data => {
            // Populate drug details table
            const drugDetailsTable = document.getElementById('drugDetailsTable');
            drugDetailsTable.innerHTML = ''; // Clear existing rows
            data.forEach(drug => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${drug.name}</td>
                    <td>${drug.description}</td>
                    <td>${drug.dosage}</td>
                    <td>${drug.method_of_admin}</td>
                    <td>${drug.cost_per_unit}</td>
                    <td>${drug.quantity}</td>
                `;
                drugDetailsTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching drug details:', error));
}

// Load home content by default
document.addEventListener('DOMContentLoaded', function() {
    loadContent('home');
});