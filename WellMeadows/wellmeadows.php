<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection details
$host = "localhost";
$dbname = "postgres";
$user = "postgres";
$pass = "Kageyama101";

try {
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Retrieve and sanitize input data
        $first_name = $_POST['first_name'] ?? '';
        $last_name = $_POST['last_name'] ?? '';
        $address = $_POST['address'] ?? '';
        $sex = $_POST['sex'] ?? '';
        $dob = !empty($_POST['dob']) ? $_POST['dob'] : null;
        $phone = $_POST['phone'] ?? '';
        $nin = $_POST['nin'] ?? '';
        $position = $_POST['position'] ?? '';
        $allocated = !empty($_POST['allocated']) ? $_POST['allocated'] : null;
        $current_salary = !empty($_POST['current_salary']) ? $_POST['current_salary'] : null;
        $salary_scale = !empty($_POST['salary_scale']) ? $_POST['salary_scale'] : null;
        $payment_frequency = !empty($_POST['payment_frequency']) ? $_POST['payment_frequency'] : null;
        $hours_per_week = !empty($_POST['hours_per_week']) ? $_POST['hours_per_week'] : null;
        $employment_type = $_POST['employment_type'] ?? null;

        // Insert into staff table
        $stmt = $pdo->prepare("
            INSERT INTO staff (
                first_name, last_name, address, sex, dob, phone, nin, position, allocated, current_salary, salary_scale, payment_frequency, hours_per_week, employment_type
            ) VALUES (
                :first_name, :last_name, :address, :sex, :dob, :phone, :nin, :position, :allocated, :current_salary, :salary_scale, :payment_frequency, :hours_per_week, :employment_type
            ) RETURNING id
        ");

        // Bind parameters for staff table
        $stmt->bindParam(':first_name', $first_name);
        $stmt->bindParam(':last_name', $last_name);
        $stmt->bindParam(':address', $address);
        $stmt->bindParam(':sex', $sex);
        $stmt->bindParam(':dob', $dob);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':nin', $nin);
        $stmt->bindParam(':position', $position);
        $stmt->bindParam(':allocated', $allocated);
        $stmt->bindParam(':current_salary', $current_salary);
        $stmt->bindParam(':salary_scale', $salary_scale);
        $stmt->bindParam(':payment_frequency', $payment_frequency);
        $stmt->bindParam(':hours_per_week', $hours_per_week);
        $stmt->bindParam(':employment_type', $employment_type);

        // Execute query and get staff ID
        if ($stmt->execute()) {
            $staff_id = $pdo->lastInsertId('staff_id_seq'); // Specify the sequence name if necessary
            
            // Retrieve and sanitize qualifications data
            $qualification_type = $_POST['qualification_type'] ?? null;
            $qualification_date = !empty($_POST['qualification_date']) ? $_POST['qualification_date'] : null;
            $institution = $_POST['institution'] ?? null;

            // Debugging: Print out qualification data
            echo "<h2>Qualification Data:</h2>";
            echo "Staff ID: $staff_id<br>";
            echo "Qualification Type: $qualification_type<br>";
            echo "Qualification Date: $qualification_date<br>";
            echo "Institution: $institution<br>";

            // Insert into qualifications table
            $stmt_qualification = $pdo->prepare("
                INSERT INTO qualifications (
                    staff_id, qualification_type, qualification_date, institution
                ) VALUES (
                    :staff_id, :qualification_type, :qualification_date, :institution
                )
            ");

            // Bind parameters for qualifications table
            $stmt_qualification->bindParam(':staff_id', $staff_id);
            $stmt_qualification->bindParam(':qualification_type', $qualification_type);
            $stmt_qualification->bindParam(':qualification_date', $qualification_date);
            $stmt_qualification->bindParam(':institution', $institution);

            // Execute query for qualifications table
            $stmt_qualification->execute();

            // Retrieve and sanitize work experience data
            $work_position = $_POST['work_position'] ?? null;
            $start_date = !empty($_POST['start_date']) ? $_POST['start_date'] : null;
            $finish_date = !empty($_POST['finish_date']) ? $_POST['finish_date'] : null;
            $organization = $_POST['organization'] ?? null;

            // Debugging: Print out work experience data
            echo "<h2>Work Experience Data:</h2>";
            echo "Staff ID: $staff_id<br>";
            echo "Work Position: $work_position<br>";
            echo "Start Date: $start_date<br>";
            echo "Finish Date: $finish_date<br>";
            echo "Organization: $organization<br>";

            // Insert into work_experience table
            $stmt_work_experience = $pdo->prepare("
                INSERT INTO work_experience (
                    staff_id, work_position, start_date, finish_date, organization
                ) VALUES (
                    :staff_id, :work_position, :start_date, :finish_date, :organization
                )
            ");

            // Bind parameters for work_experience table
            $stmt_work_experience->bindParam(':staff_id', $staff_id);
            $stmt_work_experience->bindParam(':work_position', $work_position);
            $stmt_work_experience->bindParam(':start_date', $start_date);
            $stmt_work_experience->bindParam(':finish_date', $finish_date);
            $stmt_work_experience->bindParam(':organization', $organization);

            // Execute query for work_experience table
            $stmt_work_experience->execute();

            echo "Data successfully inserted!";
        } else {
            $errorInfo = $stmt->errorInfo();
            echo "Error inserting data: " . $errorInfo[2];
        }

        // Debugging: Print out received POST data
        echo "<h2>Received Data:</h2>";
        echo "First Name: $first_name<br>";
        echo "Last Name: $last_name<br>";
        echo "Address: $address<br>";
        echo "Sex: $sex<br>";
        echo "Date of Birth: $dob<br>";
        echo "Phone: $phone<br>";
        echo "NIN: $nin<br>";
        echo "Position: $position<br>";
        echo "Allocated: $allocated<br>";
        echo "Current Salary: $current_salary<br>";
        echo "Salary Scale: $salary_scale<br>";
        echo "Payment Frequency: $payment_frequency<br>";
        echo "Hours Per Week: $hours_per_week<br>";
        echo "Employment Type: $employment_type<br>";
        echo "Qualification Type: $qualification_type<br>";
        echo "Qualification Date: $qualification_date<br>";
        echo "Institution: $institution<br>";
        echo "Work Position: $work_position<br>";
        echo "Start Date: $start_date<br>";
        echo "Finish Date: $finish_date<br>";
        echo "Organization: $organization<br>";
    } else {
        echo "Form not submitted correctly.";
    }
} catch (PDOException $e) {
    echo "Database error: " . $e->getMessage();
}

?>
