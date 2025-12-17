<?php
require_once __DIR__ . '/Vehicle.php';

/**
 * Motorcycle Class - Extends Vehicle
 * 
 * Represents a motorcycle with additional property for handlebar type.
 */
class Motorcycle extends Vehicle
{
    // Unique property for Motorcycle
    private string $handlebarType;
    
    // Valid handlebar types
    public const HANDLEBAR_TYPES = [
        'Standard' => 'Standard (upright riding position)',
        'Clip-on' => 'Clip-on (sport bike, aggressive lean)',
        'Ape Hanger' => 'Ape Hanger (high, cruiser style)',
        'Drag Bar' => 'Drag Bar (low, straight)',
        'Beach Bar' => 'Beach Bar (wide, swept back)',
        'Clubman' => 'Clubman (café racer style)'
    ];
    
    /**
     * Constructor for Motorcycle class
     * 
     * @param string $brand The brand/manufacturer of the motorcycle
     * @param string $model The model name of the motorcycle
     * @param int $year The manufacturing year
     * @param float $price The price of the motorcycle
     * @param string $handlebarType The type of handlebars
     */
    public function __construct(string $brand, string $model, int $year, float $price, string $handlebarType)
    {
        // Call parent constructor
        parent::__construct($brand, $model, $year, $price);
        $this->handlebarType = $handlebarType;
    }
    
    /**
     * Override displayInfo to include motorcycle-specific details
     * 
     * @return string HTML formatted motorcycle details
     */
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
    
    // Getter for handlebarType
    public function getHandlebarType(): string
    {
        return $this->handlebarType;
    }
    
    // Setter for handlebarType
    public function setHandlebarType(string $handlebarType): void
    {
        $this->handlebarType = $handlebarType;
    }
}
