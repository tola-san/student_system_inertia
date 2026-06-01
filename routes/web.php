<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\StudentController;

//  Student routes
Route::get('/students', [StudentController::class, 'index']);


// Dashboard route with dummy data

Route::get('/dashboard', function () {

    return Inertia::render('Dashboard/Index', [
        'stats' => [
            'students' => 150,
            'courses' => 8,
            'teachers' => 12,
            'graduates' => 45,
        ],

        'recentStudents' => [
            [
                'id' => 1,
                'name' => 'John Doe',
                'course' => 'Computer Science',
            ],
            [
                'id' => 2,
                'name' => 'Jane Smith',
                'course' => 'Information Technology',
            ],
        ]
    ]);
});

Route::get('/students', function () {

    $students = [
        [
            'id' => 1,
            'name' => 'John Doe',
            'course' => 'Computer Science'
        ],
        [
            'id' => 2,
            'name' => 'Jane Smith',
            'course' => 'Information Technology'
        ]
    ];

    return Inertia::render('Students/Index', [
        'students' => $students
    ]);
});

Route::get('/', function () {
    return Inertia::render('Home');
});
