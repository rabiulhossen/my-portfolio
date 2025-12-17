<?php
require_once __DIR__ . '/Vehicle.php';

/**
 * Truck Class - Extends Vehicle
 * 
 * Represents a truck with additional property for cargo capacity.
 */
class Truck extends Vehicle
{
    // Unique property for Truck (in tons)
    private float $cargoCapacity;
    
    /**
     * Constructor for Truck class
     * 
     * @param string $brand The brand/manufacturer of the truck
     * @param string $model The model name of the truck
     * @param int $year The manufacturing year
     * @param float $price The price of the truck
     * @param float $cargoCapacity The cargo capacity in tons
     */
    public function __construct(string $brand, string $model, int $year, float $price, float $cargoCapacity)
    {
        // Call parent constructor
        parent::__construct($brand, $model, $year, $price);
        $this->cargoCapacity = $cargoCapacity;
    }
    
    /**
     * Override displayInfo to include truck-specific details
     * 
     * @return string HTML formatted truck details
     */
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
    
    // Getter for cargoCapacity
    public function getCargoCapacity(): float
    {
        return $this->cargoCapacity;
    }
    
    // Setter for cargoCapacity
    public function setCargoCapacity(float $cargoCapacity): void
    {
        $this->cargoCapacity = $cargoCapacity;
    }
}
