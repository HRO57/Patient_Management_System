<?php

namespace App\Http\Controllers\Api;

use App\Models\Patient;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class PatientController extends Controller
{
    public function index(Request $request)
    {
        $limit = $request->get('limit', 5); // Default to 10 items per page
        $patients = Patient::paginate($limit);

        if ($patients->count() > 0) {
            return response()->json([
                "status" => "success",
                "message" => $patients->items(), // The paginated items
                "current_page" => $patients->currentPage(),
                "last_page" => $patients->lastPage(),
                "total" => $patients->total(),
            ], 200);
        } else {
            return response()->json([
                "status" => "error",
                "message" => "NO PATIENT"
            ], 404);
        }
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required | max: 100',
            'description' => 'required |string | max: 2000',
            'email' => 'required | max: 191',
            'phone' => 'required | digits: 11',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 422);
        } else {
            $patient = Patient::create([
                'name' => $request->name,
                'description' => $request->description,
                'email' => $request->email,
                'phone' => $request->phone
            ]);


            if ($patient) {
                return response()->json([
                    'status' => 'success',
                    'message' => 'Created patient successfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'error creating patient'
                ], 500);
            }
        }
    }


    public function show($id)
    {
        $patient = Patient::find($id);
        if ($patient) {
            return response()->json([
                'status' => 'success',
                "message" => $patient
            ], 300);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'No patient available'
            ], 700);
        }
    }


    public function edit($id)
    {
        $patient = Patient::find($id);
        if ($patient) {
            return response()->json([
                'status' => 'success',
                'message' => $patient
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Not Found'
            ], 440);
        }
    }


    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required | max: 100',
            'description' => 'required |string | max: 2000',
            'email' => 'required | max: 191',
            'phone' => 'required | digits: 11',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 522);
        } else {

            $patient = Patient::find($id);
            if ($patient) {

                $patient->update([
                    'name' => $request->name,
                    'description' => $request->description,
                    'email' => $request->email,
                    'phone' => $request->phone
                ]);

                return response()->json([
                    'status' => 'success',
                    'message' => 'Updated patient successfully'
                ], 202);
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'error update patient'
                ], 505);
            }
        }
    }


    public function destroy($id)
    {
        $patient = Patient::find($id);
        if ($patient) {

            $patient->delete();
            
            return response()->json([
                'status' => 'success',
                'message' => 'Delete patient successfully'
            ], 100);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'error delete patient'
            ], 303);
        }
    }
}
