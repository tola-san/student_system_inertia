<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class StudentController extends Controller
{
    private array $students = [
        [
            'id' => 1,
            'student_id' => 'ST001',
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'course' => 'Computer Science',
            'year' => 3,
        ],
        [
            'id' => 2,
            'student_id' => 'ST002',
            'name' => 'Jane Smith',
            'email' => 'jane@example.com',
            'course' => 'Information Technology',
            'year' => 2,
        ],
        [
            'id' => 3,
            'student_id' => 'ST003',
            'name' => 'Bob Johnson',
            'email' => 'bob@example.com',
            'course' => 'Business Administration',
            'year' => 1,
        ],
    ];

    public function index()
    {
        return Inertia::render('Students/Index', [
            'students' => $this->students
        ]);
    }
}