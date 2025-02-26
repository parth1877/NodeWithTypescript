CREATE TABLE Customers_07 (
    CustomerID INT PRIMARY KEY IDENTITY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(15),
    Address TEXT
);

CREATE TABLE HotelBranch_07 (
    BranchID INT PRIMARY KEY IDENTITY,
    BranchName VARCHAR(100),
    Location TEXT
);

CREATE TABLE Rooms_07 (
    RoomID INT PRIMARY KEY IDENTITY,
    BranchID INT,
    RoomType VARCHAR(50),
    PricePerNight DECIMAL(10,2),
    Status VARCHAR(20) CHECK (Status IN ('Available', 'Booked')),
    FOREIGN KEY (BranchID) REFERENCES HotelBranch_07(BranchID)
);

CREATE TABLE Employees_07 (
    EmployeeID INT PRIMARY KEY IDENTITY,
    Name VARCHAR(100),
    Position VARCHAR(50),
    Salary DECIMAL(10,2),
    HireDate DATE,
    ManagerID INT NULL,
    FOREIGN KEY (ManagerID) REFERENCES Employees_07(EmployeeID)
);

CREATE TABLE Bookings_07 (
    BookingID INT PRIMARY KEY IDENTITY,
    CustomerID INT,
    RoomID INT,
    CheckInDate DATE,
    CheckOutDate DATE,
    TotalAmount DECIMAL(10,2),
    FOREIGN KEY (CustomerID) REFERENCES Customers_07(CustomerID),
    FOREIGN KEY (RoomID) REFERENCES Rooms_07(RoomID)
);

CREATE TABLE Payments_07 (
    PaymentID INT PRIMARY KEY IDENTITY,
    BookingID INT,
    PaymentDate DATE,
    Amount DECIMAL(10,2),
    PaymentMethod VARCHAR(50),
    FOREIGN KEY (BookingID) REFERENCES Bookings_07(BookingID)
);

CREATE TABLE Services_07 (
    ServiceID INT PRIMARY KEY IDENTITY,
    ServiceName VARCHAR(100),
    Price DECIMAL(10,2)
);

CREATE TABLE BookingService_07 (
    BookingID INT,
    ServiceID INT,
    FOREIGN KEY (BookingID) REFERENCES Bookings_07(BookingID),
    FOREIGN KEY (ServiceID) REFERENCES Services_07(ServiceID)
);

-- Sample Data Insertion (DML)
-- Insert records into Customers_07
INSERT INTO Customers_07 (Name, Email, Phone, Address) VALUES
('John Doe', 'john.doe@example.com', '1234567890', '123 Main St'),
('Jane Smith', 'jane.smith@example.com', '2345678901', '456 Elm St'),
('Alice Johnson', 'alice.johnson@example.com', '3456789012', '789 Oak St'),
('Bob Brown', 'bob.brown@example.com', '4567890123', '321 Pine St'),
('Charlie White', 'charlie.white@example.com', '5678901234', '654 Birch St'),
('David Black', 'david.black@example.com', '6789012345', '987 Maple St'),
('Emma Green', 'emma.green@example.com', '7890123456', '159 Cedar St'),
('Frank Harris', 'frank.harris@example.com', '8901234567', '753 Spruce St'),
('Grace Lewis', 'grace.lewis@example.com', '9012345678', '852 Walnut St'),
('Henry Walker', 'henry.walker@example.com', '0123456789', '951 Cherry St');

-- Insert records into HotelBranch_07
INSERT INTO HotelBranch_07 (BranchName, Location) VALUES
('Downtown Hotel', 'New York'),
('Seaside Resort', 'Miami'),
('Mountain Lodge', 'Denver'),
('City Center Inn', 'Chicago'),
('Riverside Hotel', 'San Francisco'),
('Lakeside Retreat', 'Seattle'),
('Desert Oasis', 'Las Vegas'),
('Skyline Tower', 'Los Angeles'),
('Garden Hotel', 'Boston'),
('Luxury Suites', 'Houston');

-- Insert records into Rooms_07
INSERT INTO Rooms_07 (BranchID, RoomType, PricePerNight, Status) VALUES
(1, 'Single', 100.00, 'Available'),
(1, 'Double', 150.00, 'Booked'),
(2, 'Suite', 300.00, 'Available'),
(3, 'Deluxe', 250.00, 'Available'),
(4, 'Single', 120.00, 'Booked'),
(5, 'Double', 180.00, 'Available'),
(6, 'Suite', 350.00, 'Booked'),
(7, 'Deluxe', 270.00, 'Available'),
(8, 'Single', 130.00, 'Booked'),
(9, 'Double', 190.00, 'Available');

-- Insert records into Employees_07
INSERT INTO Employees_07 (Name, Position, Salary, HireDate, ManagerID) VALUES
('Michael Scott', 'Manager', 75000.00, '2020-01-10', NULL),
('Dwight Schrute', 'Assistant Manager', 50000.00, '2020-02-15', 1),
('Jim Halpert', 'Sales', 45000.00, '2020-03-20', 1),
('Pam Beesly', 'Receptionist', 40000.00, '2020-04-25', 1),
('Stanley Hudson', 'Sales', 48000.00, '2020-05-30', 1),
('Angela Martin', 'Accounting', 47000.00, '2020-06-05', 1),
('Kevin Malone', 'Accounting', 46000.00, '2020-07-10', 1),
('Oscar Martinez', 'Accounting', 49000.00, '2020-08-15', 1),
('Toby Flenderson', 'HR', 55000.00, '2020-09-20', NULL),
('Darryl Philbin', 'Warehouse', 52000.00, '2020-10-25', NULL);

-- Insert records into Bookings_07
INSERT INTO Bookings_07 (CustomerID, RoomID, CheckInDate, CheckOutDate, TotalAmount) VALUES
(1, 1, '2025-03-01', '2025-03-05', 400.00),
(2, 2, '2025-03-02', '2025-03-06', 600.00),
(3, 3, '2025-03-03', '2025-03-07', 1200.00),
(4, 4, '2025-03-04', '2025-03-08', 1000.00),
(5, 5, '2025-03-05', '2025-03-09', 480.00),
(6, 6, '2025-03-06', '2025-03-10', 1400.00),
(7, 7, '2025-03-07', '2025-03-11', 1080.00),
(8, 8, '2025-03-08', '2025-03-12', 520.00),
(9, 9, '2025-03-09', '2025-03-13', 760.00),
(10, 10, '2025-03-10', '2025-03-14', 760.00);

-- Insert records into Payments_07
INSERT INTO Payments_07 (BookingID, PaymentDate, Amount, PaymentMethod) VALUES
(1, '2025-02-25', 400.00, 'Credit Card'),
(2, '2025-02-26', 600.00, 'Debit Card'),
(3, '2025-02-27', 1200.00, 'PayPal'),
(4, '2025-02-28', 1000.00, 'Credit Card'),
(5, '2025-02-29', 480.00, 'Cash'),
(6, '2025-03-01', 1400.00, 'PayPal'),
(7, '2025-03-02', 1080.00, 'Debit Card'),
(8, '2025-03-03', 520.00, 'Credit Card'),
(9, '2025-03-04', 760.00, 'Cash'),
(10, '2025-03-05', 760.00, 'PayPal');

-- Insert records into Services_07
INSERT INTO Services_07 (ServiceName, Price) VALUES
('Room Cleaning', 20.00),
('Laundry', 15.00),
('Breakfast', 25.00),
('Gym Access', 30.00),
('Spa', 50.00),
('Wi-Fi', 10.00),
('Airport Shuttle', 40.00),
('Mini Bar', 35.00),
('Car Rental', 60.00),
('City Tour', 100.00);

-- Insert records into BookingService_07
INSERT INTO BookingService_07 (BookingID, ServiceID) VALUES
(1, 1),
(1, 3),
(2, 5),
(3, 2),
(3, 4),
(4, 6),
(5, 7),
(6, 8),
(7, 9),
(8, 10);


-- Queries using Joins
SELECT c.Name, r.RoomType, b.CheckInDate, b.TotalAmount 
FROM Customers_07 c
JOIN Bookings_07 b ON c.CustomerID = b.CustomerID
JOIN Rooms_07 r ON b.RoomID = r.RoomID;

-- Self Join to get employees and their managers
SELECT e1.Name AS Employee, e2.Name AS Manager 
FROM Employees_07 e1
LEFT JOIN Employees_07 e2 ON e1.ManagerID = e2.EmployeeID;

-- Find rooms that have never been booked
SELECT r.* FROM Rooms_07 r
LEFT JOIN Bookings_07 b ON r.RoomID = b.RoomID
WHERE b.RoomID IS NULL;

-- Subqueries
SELECT CustomerID FROM Bookings_07 
GROUP BY CustomerID HAVING COUNT(*) > 1;

SELECT TOP 1 RoomID FROM Bookings_07 ORDER BY TotalAmount DESC;

-- Views
CREATE VIEW ActiveBookings_07 AS
SELECT c.Name AS CustomerName, r.RoomType, b.CheckInDate, b.CheckOutDate
FROM Bookings_07 b
JOIN Customers_07 c ON b.CustomerID = c.CustomerID
JOIN Rooms_07 r ON b.RoomID = r.RoomID
WHERE b.CheckOutDate >= GETDATE();

-- Indexing for Optimization
CREATE INDEX idx_RoomType_07 ON Rooms_07(RoomType);
CREATE INDEX idx_CheckInOut_07 ON Bookings_07(CheckInDate, CheckOutDate);

-- Stored Procedure to get total revenue in a given month
CREATE PROCEDURE GetTotalRevenue_07 (@Year INT, @Month INT)
AS
BEGIN
    SELECT SUM(Amount) AS TotalRevenue FROM Payments_07
    WHERE YEAR(PaymentDate) = @Year AND MONTH(PaymentDate) = @Month;
END;

EXEC GetTotalRevenue_07 @Year = 2025, @Month = 3;


-- User-Defined Function to calculate total stay duration
CREATE FUNCTION GetStayDuration_07 (@BookingID INT)
RETURNS INT
AS
BEGIN
    DECLARE @Days INT;
    SELECT @Days = DATEDIFF(DAY, CheckInDate, CheckOutDate) FROM Bookings_07 WHERE BookingID = @BookingID;
    RETURN @Days;
END;

SELECT dbo.GetStayDuration_07(3) AS StayDuration;


-- Trigger to update room status when a booking is canceled
CREATE TRIGGER UpdateRoomStatus_07 ON Bookings_07
AFTER DELETE
AS
BEGIN
    UPDATE Rooms_07 SET Status = 'Available'
    WHERE RoomID IN (SELECT RoomID FROM deleted);
END;

SELECT RoomID, Status FROM Rooms_07 WHERE RoomID = 2;

DELETE FROM Bookings_07 WHERE BookingID = 2;


-- Security & Privileges
-- CREATE ROLE HotelManager_07;
-- GRANT SELECT, INSERT, UPDATE, DELETE ON Bookings_07 TO HotelManager_07;
-- GRANT SELECT, INSERT, UPDATE, DELETE ON Payments_07 TO HotelManager_07;

-- CREATE ROLE FrontDeskStaff_07;
-- GRANT SELECT ON Rooms_07 TO FrontDeskStaff_07;

-- -- Backup & Restore (Command for MSSQL Backup)
-- BACKUP DATABASE HotelDB TO DISK = 'C:\backup\HotelDB_07.bak' WITH FORMAT;

-- -- Restore (Command for MSSQL Restore)
-- RESTORE DATABASE HotelDB FROM DISK = 'C:\backup\HotelDB_07.bak' WITH REPLACE;
