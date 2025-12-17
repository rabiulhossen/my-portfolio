<?php
/**
 * Vehicle Management System - Vercel Serverless Entry Point
 */

// Define classes inline for serverless environment
class Vehicle
{
    protected string $brand;
    protected string $model;
    protected int $year;
    protected float $price;
    private static int $totalVehicles = 0;
    
    public function __construct(string $brand, string $model, int $year, float $price)
    {
        $this->brand = $brand;
        $this->model = $model;
        $this->year = $year;
        $this->price = $price;
        self::$totalVehicles++;
    }
    
    public function displayInfo(): string
    {
        return "<div class='vehicle-info'>
            <h3>{$this->brand} {$this->model}</h3>
            <p><strong>Year:</strong> {$this->year}</p>
            <p><strong>Price:</strong> $" . number_format($this->price, 2) . "</p>
        </div>";
    }
    
    public static function getTotalVehicles(): int { return self::$totalVehicles; }
    public static function resetCounter(): void { self::$totalVehicles = 0; }
    
    public function compare(Vehicle $other, string $criterion = 'price'): int
    {
        switch ($criterion) {
            case 'price': return $this->price <=> $other->price;
            case 'year': return $this->year <=> $other->year;
            default: throw new InvalidArgumentException("Invalid criterion: $criterion");
        }
    }
    
    public function getComparisonResult(Vehicle $other, string $criterion = 'price'): string
    {
        $result = $this->compare($other, $criterion);
        $thisName = "{$this->brand} {$this->model}";
        $otherName = "{$other->brand} {$other->model}";
        
        if ($criterion === 'price') {
            $thisValue = "$" . number_format($this->price, 2);
            $otherValue = "$" . number_format($other->price, 2);
        } else {
            $thisValue = $this->year;
            $otherValue = $other->year;
        }
        
        if ($result < 0) {
            return "<p class='comparison'>📊 <strong>$thisName</strong> ($thisValue) has a lower $criterion than <strong>$otherName</strong> ($otherValue)</p>";
        } elseif ($result > 0) {
            return "<p class='comparison'>📊 <strong>$thisName</strong> ($thisValue) has a higher $criterion than <strong>$otherName</strong> ($otherValue)</p>";
        } else {
            return "<p class='comparison'>📊 <strong>$thisName</strong> and <strong>$otherName</strong> have the same $criterion ($thisValue)</p>";
        }
    }
    
    public function getBrand(): string { return $this->brand; }
    public function getModel(): string { return $this->model; }
    public function getYear(): int { return $this->year; }
    public function getPrice(): float { return $this->price; }
}

class Car extends Vehicle
{
    private int $numberOfDoors;
    
    public function __construct(string $brand, string $model, int $year, float $price, int $numberOfDoors)
    {
        parent::__construct($brand, $model, $year, $price);
        $this->numberOfDoors = $numberOfDoors;
    }
    
    public function displayInfo(): string
    {
        return "<div class='vehicle-info car'>
            <div class='vehicle-icon'>🚗</div>
            <h3>{$this->brand} {$this->model}</h3>
            <span class='vehicle-type'>Car</span>
            <div class='vehicle-details'>
                <p><strong>Year:</strong> {$this->year}</p>
                <p><strong>Price:</strong> $" . number_format($this->price, 2) . "</p>
                <p class='unique-property'><strong>Number of Doors:</strong> {$this->numberOfDoors}</p>
            </div>
        </div>";
    }
    
    public function getNumberOfDoors(): int { return $this->numberOfDoors; }
}

class Truck extends Vehicle
{
    private float $cargoCapacity;
    
    public function __construct(string $brand, string $model, int $year, float $price, float $cargoCapacity)
    {
        parent::__construct($brand, $model, $year, $price);
        $this->cargoCapacity = $cargoCapacity;
    }
    
    public function displayInfo(): string
    {
        return "<div class='vehicle-info truck'>
            <div class='vehicle-icon'>🚚</div>
            <h3>{$this->brand} {$this->model}</h3>
            <span class='vehicle-type'>Truck</span>
            <div class='vehicle-details'>
                <p><strong>Year:</strong> {$this->year}</p>
                <p><strong>Price:</strong> $" . number_format($this->price, 2) . "</p>
                <p class='unique-property'><strong>Cargo Capacity:</strong> {$this->cargoCapacity} tons</p>
            </div>
        </div>";
    }
    
    public function getCargoCapacity(): float { return $this->cargoCapacity; }
}

class Motorcycle extends Vehicle
{
    private string $handlebarType;
    
    public const HANDLEBAR_TYPES = [
        'Standard' => 'Standard (upright riding position)',
        'Clip-on' => 'Clip-on (sport bike, aggressive lean)',
        'Ape Hanger' => 'Ape Hanger (high, cruiser style)',
        'Drag Bar' => 'Drag Bar (low, straight)',
        'Beach Bar' => 'Beach Bar (wide, swept back)',
        'Clubman' => 'Clubman (café racer style)'
    ];
    
    public function __construct(string $brand, string $model, int $year, float $price, string $handlebarType)
    {
        parent::__construct($brand, $model, $year, $price);
        $this->handlebarType = $handlebarType;
    }
    
    public function displayInfo(): string
    {
        return "<div class='vehicle-info motorcycle'>
            <div class='vehicle-icon'>🏍️</div>
            <h3>{$this->brand} {$this->model}</h3>
            <span class='vehicle-type'>Motorcycle</span>
            <div class='vehicle-details'>
                <p><strong>Year:</strong> {$this->year}</p>
                <p><strong>Price:</strong> $" . number_format($this->price, 2) . "</p>
                <p class='unique-property'><strong>Handlebar Type:</strong> {$this->handlebarType}</p>
            </div>
        </div>";
    }
    
    public function getHandlebarType(): string { return $this->handlebarType; }
}

// Reset counter and create sample vehicles
Vehicle::resetCounter();
$vehicles = [];
$newVehicle = null;
$formMessage = '';

$sampleCar = new Car('Toyota', 'Camry', 2023, 28999.99, 4);
$sampleTruck = new Truck('Ford', 'F-150', 2024, 45999.99, 3.5);
$sampleMotorcycle = new Motorcycle('Harley-Davidson', 'Street 750', 2023, 8999.99, 'Standard');

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
        if ($newVehicle) $vehicles[] = $newVehicle;
    } catch (Exception $e) {
        $formMessage = "❌ Error: " . $e->getMessage();
    }
}

// Output HTML
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vehicle Management System - Car Dealership</title>
    <style>
:root {
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;
    --secondary-color: #64748b;
    --success-color: #10b981;
    --error-color: #ef4444;
    --background-color: #f8fafc;
    --card-background: #ffffff;
    --text-color: #1e293b;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
    --car-color: #3b82f6;
    --truck-color: #f59e0b;
    --motorcycle-color: #8b5cf6;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: var(--background-color); color: var(--text-color); line-height: 1.6; }
.container { max-width: 1200px; margin: 0 auto; padding: 20px; }
header { text-align: center; padding: 40px 20px; background: linear-gradient(135deg, var(--primary-color), #7c3aed); color: white; border-radius: 16px; margin-bottom: 30px; box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3); }
header h1 { font-size: 2.5rem; margin-bottom: 10px; }
header .subtitle { font-size: 1.1rem; opacity: 0.9; }
.stats-bar { display: flex; justify-content: center; gap: 20px; margin-bottom: 30px; }
.stat { background: var(--card-background); padding: 20px 40px; border-radius: 12px; text-align: center; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); border: 1px solid var(--border-color); }
.stat-number { display: block; font-size: 2.5rem; font-weight: bold; color: var(--primary-color); }
.stat-label { font-size: 0.9rem; color: var(--text-muted); }
section { background: var(--card-background); padding: 30px; border-radius: 16px; margin-bottom: 30px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); border: 1px solid var(--border-color); }
section h2 { font-size: 1.5rem; margin-bottom: 20px; color: var(--text-color); padding-bottom: 10px; border-bottom: 2px solid var(--border-color); }
.section-description { color: var(--text-muted); margin-bottom: 20px; }
.form-section { background: linear-gradient(to bottom right, #ffffff, #f0f9ff); }
.form-group { margin-bottom: 20px; }
.form-group label { display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-color); }
.form-group input, .form-group select { width: 100%; padding: 12px 16px; border: 2px solid var(--border-color); border-radius: 8px; font-size: 1rem; transition: border-color 0.3s, box-shadow 0.3s; }
.form-group input:focus, .form-group select:focus { outline: none; border-color: var(--primary-color); box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
@media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
.unique-field { background: #f0fdf4; padding: 15px; border-radius: 8px; border: 1px dashed var(--success-color); }
.submit-btn { background: var(--primary-color); color: white; padding: 14px 30px; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: background 0.3s, transform 0.2s; width: 100%; }
.submit-btn:hover { background: var(--primary-hover); transform: translateY(-2px); }
.message { padding: 15px 20px; border-radius: 8px; margin-bottom: 20px; font-weight: 500; }
.message.success { background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; }
.message.error { background: #fef2f2; color: #b91c1c; border: 1px solid #fecaca; }
.vehicles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.vehicle-info { background: var(--card-background); border-radius: 12px; padding: 25px; position: relative; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; border: 2px solid var(--border-color); animation: fadeIn 0.5s ease-out; }
.vehicle-info:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); }
.vehicle-info.car { border-top: 4px solid var(--car-color); }
.vehicle-info.truck { border-top: 4px solid var(--truck-color); }
.vehicle-info.motorcycle { border-top: 4px solid var(--motorcycle-color); }
.vehicle-icon { font-size: 3rem; margin-bottom: 15px; }
.vehicle-info h3 { font-size: 1.3rem; margin-bottom: 10px; color: var(--text-color); }
.vehicle-type { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin-bottom: 15px; }
.car .vehicle-type { background: #dbeafe; color: var(--car-color); }
.truck .vehicle-type { background: #fef3c7; color: #d97706; }
.motorcycle .vehicle-type { background: #ede9fe; color: var(--motorcycle-color); }
.vehicle-details p { margin: 8px 0; color: var(--text-muted); }
.vehicle-details strong { color: var(--text-color); }
.unique-property { background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-left: 3px solid var(--success-color); }
.comparison-results { background: #fafafa; padding: 20px; border-radius: 8px; }
.comparison-results h3 { margin: 20px 0 10px 0; color: var(--text-color); font-size: 1.1rem; }
.comparison-results h3:first-child { margin-top: 0; }
.comparison { padding: 10px 15px; background: white; border-radius: 6px; margin: 8px 0; border-left: 3px solid var(--primary-color); }
.info-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
.info-card { background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid var(--border-color); }
.info-card h3 { font-size: 1rem; margin-bottom: 15px; color: var(--primary-color); }
.info-card ul { list-style: none; padding: 0; }
.info-card li { padding: 5px 0; padding-left: 20px; position: relative; font-size: 0.9rem; color: var(--text-muted); }
.info-card li::before { content: '•'; position: absolute; left: 0; color: var(--primary-color); }
footer { text-align: center; padding: 30px; color: var(--text-muted); border-top: 1px solid var(--border-color); margin-top: 40px; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 768px) { header h1 { font-size: 1.8rem; } .container { padding: 10px; } section { padding: 20px; } .vehicles-grid, .info-grid { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🚗 Vehicle Management System</h1>
            <p class="subtitle">Car Dealership Fleet Management</p>
        </header>

        <div class="stats-bar">
            <div class="stat">
                <span class="stat-number"><?= Vehicle::getTotalVehicles() ?></span>
                <span class="stat-label">Total Vehicles in System</span>
            </div>
        </div>

        <section class="form-section">
            <h2>📝 Add New Vehicle</h2>
            <?php if ($formMessage): ?>
                <div class="message <?= strpos($formMessage, '✅') !== false ? 'success' : 'error' ?>"><?= $formMessage ?></div>
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
                <div class="form-group unique-field" id="car_fields" style="display: none;">
                    <label for="number_of_doors">Number of Doors</label>
                    <select name="number_of_doors" id="number_of_doors">
                        <option value="2">2 Doors (Coupe)</option>
                        <option value="3">3 Doors (Hatchback)</option>
                        <option value="4" selected>4 Doors (Sedan)</option>
                        <option value="5">5 Doors (SUV/Wagon)</option>
                    </select>
                </div>
                <div class="form-group unique-field" id="truck_fields" style="display: none;">
                    <label for="cargo_capacity">Cargo Capacity (tons)</label>
                    <input type="number" name="cargo_capacity" id="cargo_capacity" min="0" max="50" step="0.1" placeholder="e.g., 3.5">
                </div>
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

        <section class="vehicles-section">
            <h2>🏪 Dealership Inventory</h2>
            <p class="section-description">Below are all vehicles currently in our system, demonstrating inheritance and method overriding:</p>
            <div class="vehicles-grid">
                <?php foreach ($vehicles as $vehicle): ?>
                    <?= $vehicle->displayInfo() ?>
                <?php endforeach; ?>
            </div>
        </section>

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

        <section class="info-section">
            <h2>ℹ️ Technical Implementation</h2>
            <div class="info-grid">
                <div class="info-card">
                    <h3>Base Class: Vehicle</h3>
                    <ul>
                        <li>Properties: $brand, $model, $year, $price</li>
                        <li>Static property: $totalVehicles</li>
                        <li>Methods: displayInfo(), compare()</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h3>Subclass: Car</h3>
                    <ul>
                        <li>Extends Vehicle</li>
                        <li>Unique: $numberOfDoors</li>
                        <li>Overrides displayInfo()</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h3>Subclass: Truck</h3>
                    <ul>
                        <li>Extends Vehicle</li>
                        <li>Unique: $cargoCapacity</li>
                        <li>Overrides displayInfo()</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h3>Subclass: Motorcycle</h3>
                    <ul>
                        <li>Extends Vehicle</li>
                        <li>Unique: $handlebarType</li>
                        <li>Overrides displayInfo()</li>
                    </ul>
                </div>
            </div>
        </section>

        <footer>
            <p>Vehicle Management System &copy; <?= date('Y') ?> - Demonstrating OOP in PHP</p>
        </footer>
    </div>

    <script>
        function toggleUniqueFields() {
            const vehicleType = document.getElementById('vehicle_type').value;
            document.querySelectorAll('.unique-field').forEach(f => f.style.display = 'none');
            if (vehicleType === 'car') document.getElementById('car_fields').style.display = 'block';
            else if (vehicleType === 'truck') document.getElementById('truck_fields').style.display = 'block';
            else if (vehicleType === 'motorcycle') document.getElementById('motorcycle_fields').style.display = 'block';
        }
    </script>
</body>
</html>
