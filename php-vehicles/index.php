<?php
/**
 * Vehicle Management System
 * 
 * This is the main entry point for the car dealership vehicle management system.
 * It demonstrates the use of classes, objects, and inheritance in PHP.
 */

// Include all class files
require_once __DIR__ . '/classes/Vehicle.php';
require_once __DIR__ . '/classes/Car.php';
require_once __DIR__ . '/classes/Truck.php';
require_once __DIR__ . '/classes/Motorcycle.php';

// Reset counter for demonstration purposes
Vehicle::resetCounter();

// Store all vehicles (sample + user-created)
$vehicles = [];
$newVehicle = null;
$formMessage = '';

// Create sample vehicles to demonstrate inheritance
$sampleCar = new Car('Toyota', 'Camry', 2023, 28999.99, 4);
$sampleTruck = new Truck('Ford', 'F-150', 2024, 45999.99, 3.5);
$sampleMotorcycle = new Motorcycle('Harley-Davidson', 'Street 750', 2023, 8999.99, 'Standard');

// Add sample vehicles to array
$vehicles[] = $sampleCar;
$vehicles[] = $sampleTruck;
$vehicles[] = $sampleMotorcycle;

// Process form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_vehicle'])) {
    $vehicleType = $_POST['vehicle_type'] ?? '';
    $brand = htmlspecialchars($_POST['brand'] ?? '');
    $model = htmlspecialchars($_POST['model'] ?? '');
    $year = (int)($_POST['year'] ?? 0);
    $price = (float)($_POST['price'] ?? 0);
    
    try {
        switch ($vehicleType) {
            case 'car':
                $numberOfDoors = (int)($_POST['number_of_doors'] ?? 4);
                $newVehicle = new Car($brand, $model, $year, $price, $numberOfDoors);
                $formMessage = "✅ Successfully added new Car: $brand $model";
                break;
            case 'truck':
                $cargoCapacity = (float)($_POST['cargo_capacity'] ?? 0);
                $newVehicle = new Truck($brand, $model, $year, $price, $cargoCapacity);
                $formMessage = "✅ Successfully added new Truck: $brand $model";
                break;
            case 'motorcycle':
                $handlebarType = htmlspecialchars($_POST['handlebar_type'] ?? 'Standard');
                $newVehicle = new Motorcycle($brand, $model, $year, $price, $handlebarType);
                $formMessage = "✅ Successfully added new Motorcycle: $brand $model";
                break;
            default:
                $formMessage = "❌ Please select a valid vehicle type.";
        }
        
        if ($newVehicle) {
            $vehicles[] = $newVehicle;
        }
    } catch (Exception $e) {
        $formMessage = "❌ Error: " . $e->getMessage();
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vehicle Management System - Car Dealership</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🚗 Vehicle Management System</h1>
            <p class="subtitle">Car Dealership Fleet Management</p>
        </header>

        <!-- Vehicle Counter -->
        <div class="stats-bar">
            <div class="stat">
                <span class="stat-number"><?= Vehicle::getTotalVehicles() ?></span>
                <span class="stat-label">Total Vehicles in System</span>
            </div>
        </div>

        <!-- Add New Vehicle Form -->
        <section class="form-section">
            <h2>📝 Add New Vehicle</h2>
            
            <?php if ($formMessage): ?>
                <div class="message <?= strpos($formMessage, '✅') !== false ? 'success' : 'error' ?>">
                    <?= $formMessage ?>
                </div>
            <?php endif; ?>
            
            <form method="POST" action="" id="vehicleForm">
                <div class="form-group">
                    <label for="vehicle_type">Vehicle Type *</label>
                    <select name="vehicle_type" id="vehicle_type" required onchange="toggleUniqueFields()">
                        <option value="">-- Select Type --</option>
                        <option value="car">🚗 Car</option>
                        <option value="truck">🚚 Truck</option>
                        <option value="motorcycle">🏍️ Motorcycle</option>
                    </select>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="brand">Brand *</label>
                        <input type="text" name="brand" id="brand" required placeholder="e.g., Toyota, Ford">
                    </div>
                    <div class="form-group">
                        <label for="model">Model *</label>
                        <input type="text" name="model" id="model" required placeholder="e.g., Camry, F-150">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="year">Year *</label>
                        <input type="number" name="year" id="year" required min="1900" max="2030" placeholder="e.g., 2024">
                    </div>
                    <div class="form-group">
                        <label for="price">Price ($) *</label>
                        <input type="number" name="price" id="price" required min="0" step="0.01" placeholder="e.g., 25999.99">
                    </div>
                </div>
                
                <!-- Car-specific field -->
                <div class="form-group unique-field" id="car_fields" style="display: none;">
                    <label for="number_of_doors">Number of Doors</label>
                    <select name="number_of_doors" id="number_of_doors">
                        <option value="2">2 Doors (Coupe)</option>
                        <option value="3">3 Doors (Hatchback)</option>
                        <option value="4" selected>4 Doors (Sedan)</option>
                        <option value="5">5 Doors (SUV/Wagon)</option>
                    </select>
                </div>
                
                <!-- Truck-specific field -->
                <div class="form-group unique-field" id="truck_fields" style="display: none;">
                    <label for="cargo_capacity">Cargo Capacity (tons)</label>
                    <input type="number" name="cargo_capacity" id="cargo_capacity" min="0" max="50" step="0.1" placeholder="e.g., 3.5">
                </div>
                
                <!-- Motorcycle-specific field -->
                <div class="form-group unique-field" id="motorcycle_fields" style="display: none;">
                    <label for="handlebar_type">Handlebar Type</label>
                    <select name="handlebar_type" id="handlebar_type">
                        <?php foreach (Motorcycle::HANDLEBAR_TYPES as $type => $description): ?>
                            <option value="<?= htmlspecialchars($type) ?>"><?= htmlspecialchars($description) ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
                
                <button type="submit" name="add_vehicle" class="submit-btn">Add Vehicle</button>
            </form>
        </section>

        <!-- Display All Vehicles -->
        <section class="vehicles-section">
            <h2>🏪 Dealership Inventory</h2>
            <p class="section-description">Below are all vehicles currently in our system, demonstrating inheritance and method overriding:</p>
            
            <div class="vehicles-grid">
                <?php foreach ($vehicles as $vehicle): ?>
                    <?= $vehicle->displayInfo() ?>
                <?php endforeach; ?>
            </div>
        </section>

        <!-- Vehicle Comparison Demo -->
        <section class="comparison-section">
            <h2>📊 Vehicle Comparison Demo</h2>
            <p class="section-description">Demonstrating the compare() method from the base Vehicle class:</p>
            
            <div class="comparison-results">
                <h3>Price Comparison:</h3>
                <?= $sampleCar->getComparisonResult($sampleTruck, 'price') ?>
                <?= $sampleCar->getComparisonResult($sampleMotorcycle, 'price') ?>
                <?= $sampleTruck->getComparisonResult($sampleMotorcycle, 'price') ?>
                
                <h3>Year Comparison:</h3>
                <?= $sampleCar->getComparisonResult($sampleTruck, 'year') ?>
                <?= $sampleCar->getComparisonResult($sampleMotorcycle, 'year') ?>
            </div>
        </section>

        <!-- Technical Information -->
        <section class="info-section">
            <h2>ℹ️ Technical Implementation</h2>
            <div class="info-grid">
                <div class="info-card">
                    <h3>Base Class: Vehicle</h3>
                    <ul>
                        <li>Properties: $brand, $model, $year, $price</li>
                        <li>Static property: $totalVehicles (counts instances)</li>
                        <li>Methods: displayInfo(), compare(), getComparisonResult()</li>
                        <li>Getters and setters for all properties</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h3>Subclass: Car</h3>
                    <ul>
                        <li>Extends Vehicle</li>
                        <li>Unique property: $numberOfDoors</li>
                        <li>Overrides displayInfo() method</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h3>Subclass: Truck</h3>
                    <ul>
                        <li>Extends Vehicle</li>
                        <li>Unique property: $cargoCapacity</li>
                        <li>Overrides displayInfo() method</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h3>Subclass: Motorcycle</h3>
                    <ul>
                        <li>Extends Vehicle</li>
                        <li>Unique property: $handlebarType</li>
                        <li>Overrides displayInfo() method</li>
                        <li>Includes HANDLEBAR_TYPES constant</li>
                    </ul>
                </div>
            </div>
        </section>

        <footer>
            <p>Vehicle Management System &copy; <?= date('Y') ?> - Demonstrating OOP in PHP</p>
        </footer>
    </div>

    <script>
        // Toggle visibility of unique fields based on vehicle type selection
        function toggleUniqueFields() {
            const vehicleType = document.getElementById('vehicle_type').value;
            const allUniqueFields = document.querySelectorAll('.unique-field');
            
            // Hide all unique fields first
            allUniqueFields.forEach(field => {
                field.style.display = 'none';
            });
            
            // Show the relevant field based on selection
            if (vehicleType === 'car') {
                document.getElementById('car_fields').style.display = 'block';
            } else if (vehicleType === 'truck') {
                document.getElementById('truck_fields').style.display = 'block';
            } else if (vehicleType === 'motorcycle') {
                document.getElementById('motorcycle_fields').style.display = 'block';
            }
        }
    </script>
</body>
</html>
