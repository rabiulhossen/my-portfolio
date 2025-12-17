<?php
require_once __DIR__ . '/Vehicle.php';

/**
 * Car Class - Extends Vehicle
 * 
 * Represents a car with additional property for number of doors.
 */
class Car extends Vehicle
{
    // Unique property for Car
    private int $numberOfDoors;
    
    /**
     * Constructor for Car class
     * 
     * @param string $brand The brand/manufacturer of the car
     * @param string $model The model name of the car
     * @param int $year The manufacturing year
     * @param float $price The price of the car
     * @param int $numberOfDoors The number of doors (typically 2, 4, or 5)
     */
    public function __construct(string $brand, string $model, int $year, float $price, int $numberOfDoors)
    {
        // Call parent constructor
        parent::__construct($brand, $model, $year, $price);
        $this->numberOfDoors = $numberOfDoors;
    }
    
    /**
     * Override displayInfo to include car-specific details
     * 
     * @return string HTML formatted car details
     */
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
    
    // Getter for numberOfDoors
    public function getNumberOfDoors(): int
    {
        return $this->numberOfDoors;
    }
    
    // Setter for numberOfDoors
    public function setNumberOfDoors(int $numberOfDoors): void
    {
        $this->numberOfDoors = $numberOfDoors;
    }
}
