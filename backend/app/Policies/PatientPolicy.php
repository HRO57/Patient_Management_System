<?php

namespace App\Policies;

use App\Models\Patient;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PatientPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any patients.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        // Define your logic to determine if the user can view any patients
        return true; // Allow all authenticated users to view any patients
    }

    /**
     * Determine whether the user can view the patient.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Patient  $patient
     * @return mixed
     */
    public function view(User $user, Patient $patient)
    {
        // Allow users to view only their own patients
        return $user->id === $patient->user_id;
    }

    /**
     * Determine whether the user can create patients.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        // Define your logic to determine if the user can create a patient
        return true; // Allow all authenticated users to create patients
    }

    /**
     * Determine whether the user can update the patient.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Patient  $patient
     * @return mixed
     */
    public function update(User $user, Patient $patient)
    {
        // Allow users to update only their own patients
        return $user->id === $patient->user_id;
    }

    /**
     * Determine whether the user can delete the patient.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Patient  $patient
     * @return mixed
     */
    public function delete(User $user, Patient $patient)
    {
        // Allow users to delete only their own patients
        return $user->id === $patient->user_id;
    }

    /**
     * Determine whether the user can restore the patient.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Patient  $patient
     * @return mixed
     */
    public function restore(User $user, Patient $patient)
    {
        // Define your logic to determine if the user can restore a patient
        return $user->id === $patient->user_id;
    }

    /**
     * Determine whether the user can permanently delete the patient.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Patient  $patient
     * @return mixed
     */
    public function forceDelete(User $user, Patient $patient)
    {
        // Define your logic to determine if the user can permanently delete a patient
        return $user->id === $patient->user_id;
    }
}
