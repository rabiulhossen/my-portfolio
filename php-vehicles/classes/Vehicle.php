<?php
/**
 * Vehicle Base Class
 * 
 * This class represents the base vehicle with common properties
 * shared across all vehicle types in the dealership.
 */
class Vehicle
{
    // Common properties for all vehicles
    protected string $brand;
    protected string $model;
    protected int $year;
    protected float $price;
    
    // Static property to count total vehicle instances
    private static int $totalVehicles = 0;
    
    /**
     * Constructor for Vehicle class
     * 
     * @param string $brand The brand/manufacturer of the vehicle
     * @param string $model The model name of the vehicle
     * @param int $year The manufacturing year
     * @param float $price The price of the vehicle
     */
    public function __construct(string $brand, string $model, int $year, float $price)
    {
        $this->brand = $brand;
        $this->model = $model;
        $this->year = $year;
        $this->price = $price;
        
        // Increment the total vehicle count
        self::$totalVehicles++;
    }
    
    /**
     * Display vehicle information
     * This method can be overridden by subclasses
     * 
     * @return string HTML formatted vehicle details
     */
    public function displayInfo(): string
    {
        return "<div class='vehicle-info'>
            <h3>{$this->brand} {$this->model}</h3>
            <p><strong>Year:</strong> {$this->year}</p>
            <p><strong>Price:</strong> $" . number_format($this->price, 2) . "</p>
        </div>";
    }
    
    /**
     * Get the total number of vehicle instances created
     * 
     * @return int Total count of vehicles
     */
    public static function getTotalVehicles(): int
    {
        return self::$totalVehicles;
    }
    
    /**
     * Reset the vehicle counter (useful for testing)
     */
    public static function resetCounter(): void
    {
        self::$totalVehicles = 0;
    }
    
    /**
     * Compare this vehicle with another based on a criterion
     * 
     * @param Vehicle $other The vehicle to compare with
     * @param string $criterion The comparison criterion ('price' or 'year')
     * @return int Returns -1 if this < other, 0 if equal, 1 if this > other
     */
    public function compare(Vehicle $other, string $criterion = 'price'): int
    {
        switch ($criterion) {
            case 'price':
                return $this->price <=> $other->price;
            case 'year':
                return $this->year <=> $other->year;
            default:
                throw new InvalidArgumentException("Invalid comparison criterion: $criterion. Use 'price' or 'year'.");
        }
    }
    
    /**
     * Get a human-readable comparison result
     * 
     * @param Vehicle $other The vehicle to compare with
     * @param string $criterion The comparison criterion ('price' or 'year')
     * @return string Human-readable comparison result
     */
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
    
    // Getters
    public function getBrand(): string { return $this->brand; }
    public function getModel(): string { return $this->model; }
    public function getYear(): int { return $this->year; }
    public function getPrice(): float { return $this->price; }
    
    // Setters
    public function setBrand(string $brand): void { $this->brand = $brand; }
    public function setModel(string $model): void { $this->model = $model; }
    public function setYear(int $year): void { $this->year = $year; }
    public function setPrice(float $price): void { $this->price = $price; }
}
