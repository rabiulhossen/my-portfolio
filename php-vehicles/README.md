# Vehicle Management System

A PHP object-oriented programming demonstration for a car dealership vehicle management system.

## Overview

This project demonstrates the following OOP concepts in PHP:
- **Classes and Objects** - Creating and instantiating vehicle objects
- **Inheritance** - Base `Vehicle` class with `Car`, `Truck`, and `Motorcycle` subclasses
- **Method Overriding** - Each subclass overrides `displayInfo()` method
- **Static Properties** - Counting total vehicle instances
- **Encapsulation** - Protected/private properties with getters and setters

## Project Structure

```
php-vehicles/
├── classes/
│   ├── Vehicle.php      # Base class with common properties and methods
│   ├── Car.php          # Car subclass with numberOfDoors property
│   ├── Truck.php        # Truck subclass with cargoCapacity property
│   └── Motorcycle.php   # Motorcycle subclass with handlebarType property
├── index.php            # Main entry point with HTML form
├── styles.css           # CSS styling
└── README.md            # This file
```

## Class Hierarchy

### Vehicle (Base Class)
- **Properties:**
  - `$brand` (string) - Vehicle manufacturer
  - `$model` (string) - Model name
  - `$year` (int) - Manufacturing year
  - `$price` (float) - Vehicle price
  - `static $totalVehicles` (int) - Total count of vehicle instances

- **Methods:**
  - `displayInfo()` - Returns HTML-formatted vehicle information
  - `compare(Vehicle $other, string $criterion)` - Compares vehicles by price or year
  - `getComparisonResult(Vehicle $other, string $criterion)` - Human-readable comparison
  - `getTotalVehicles()` - Returns total vehicle count (static)
  - Getters and setters for all properties

### Car (extends Vehicle)
- **Additional Property:**
  - `$numberOfDoors` (int) - Number of doors (2, 3, 4, or 5)
- **Overridden Method:**
  - `displayInfo()` - Displays car-specific information

### Truck (extends Vehicle)
- **Additional Property:**
  - `$cargoCapacity` (float) - Cargo capacity in tons
- **Overridden Method:**
  - `displayInfo()` - Displays truck-specific information

### Motorcycle (extends Vehicle)
- **Additional Property:**
  - `$handlebarType` (string) - Type of handlebars
- **Constants:**
  - `HANDLEBAR_TYPES` - Array of valid handlebar types
- **Overridden Method:**
  - `displayInfo()` - Displays motorcycle-specific information

## Features

1. **Sample Vehicles** - Pre-loaded with sample Car, Truck, and Motorcycle
2. **Add New Vehicle Form** - Dynamic HTML form to add new vehicles
3. **Vehicle Comparison** - Demonstrates the compare() method
4. **Vehicle Counter** - Shows total vehicles using static property
5. **Responsive Design** - Modern, mobile-friendly interface

## How to Run

1. Make sure you have PHP installed (PHP 7.4+ recommended)
2. Navigate to the project directory:
   ```bash
   cd php-vehicles
   ```
3. Start PHP's built-in development server:
   ```bash
   php -S localhost:8000
   ```
4. Open your browser and visit: `http://localhost:8000`

## Example Usage

```php
<?php
// Include class files
require_once 'classes/Car.php';
require_once 'classes/Truck.php';
require_once 'classes/Motorcycle.php';

// Create vehicle objects
$car = new Car('Honda', 'Civic', 2024, 25000, 4);
$truck = new Truck('Chevrolet', 'Silverado', 2024, 45000, 2.5);
$motorcycle = new Motorcycle('Yamaha', 'MT-07', 2024, 8500, 'Standard');

// Display information (demonstrates method overriding)
echo $car->displayInfo();
echo $truck->displayInfo();
echo $motorcycle->displayInfo();

// Compare vehicles
echo $car->getComparisonResult($truck, 'price');  // Compare by price
echo $car->getComparisonResult($motorcycle, 'year');  // Compare by year

// Get total vehicle count
echo "Total vehicles: " . Vehicle::getTotalVehicles();
```

## Requirements

- PHP 7.4 or higher
- Web browser for viewing the HTML interface

## License

This project is for educational purposes demonstrating OOP concepts in PHP.
