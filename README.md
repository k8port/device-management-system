# Device Management System for Families

## Background

Parents often struggle to strike a balance between granting their children access to devices and ensuring accountability for household responsibilities. With the rise of digital devices as both tools and entertainment, managing screen time has become a significant concern. To address this, a solution is needed that motivates children to complete chores and tasks in exchange for device privileges.

This SaaS platform aims to help parents assign and track tasks, monitor children's progress, and incentivize them with a points-and-reward system. The platform will also integrate device management features (via APIs or manual guides) to enforce task-based device usage.

This design prioritizes scalability for a multi-tenant architecture, ease of use for both parents and children, and security for sensitive user data.

## Requirements

### Must-Have Features
1. **Parent Dashboard**:
   - Add and manage child profiles.
   - Create, assign, and manage tasks with descriptions, deadlines, and point values.
   - Monitor task completion and approve/deny submitted tasks.
   - Track rewards redeemed by children.

2. **Child Dashboard**:
   - View assigned tasks and their details.
   - Mark tasks as completed (optional proof submission: photo/video).
   - Track earned points and available rewards.

3. **Reward System**:
   - Allow parents to define rewards and their associated point costs.
   - Enable children to redeem rewards with earned points.

4. **Multi-Tenant Support**:
   - Enable isolated environments for different families (e.g., separate accounts and data for each family).
   - Allow for role-based access (Parent/Child).

5. **Security and Compliance**:
   - Ensure secure storage and transmission of sensitive data (e.g., child profiles).
   - Provide authentication and authorization mechanisms (e.g., role-based access control).

6. **Device Lock/Unlock Integration**:
   - Investigate APIs for managing device access (e.g., Android APIs).
   - Provide a fallback with manual guides for parents to enforce access rules.

### Should-Have Features
1. **Notifications**:
   - Notify children of pending or overdue tasks.
   - Notify parents of completed tasks awaiting approval.

2. **Gamification Elements**:
   - Introduce badges, streaks, or achievements to encourage consistent engagement.

3. **Basic Analytics for Parents**:
   - Show completion rates, frequently assigned tasks, and overall performance metrics.

=== Could-Have Features
1. **Leaderboards**:
   - Create family-wide leaderboards for siblings to foster healthy competition.

2. **Third-Party API Integration**:
   - Explore integration with platforms like Google Family Link for advanced device management.


### Won’t-Have Features (For MVP Phase)
1. Integration with iOS Screen Time APIs (due to platform restrictions).
2. Support for enterprise-level tenants or organizations (focus remains on individual families for now).


## Architecture Design

The MVP will be developed with a multi-tenant SaaS architecture, focusing on data isolation, tenant-specific functionality, and scalability.

**Core SaaS Architecture Components**:

1. **Frontend**:
   - Framework: React or Next.js for building a tenant-specific dashboard.
   - Tenant-Specific Views: Parents (manage tasks/rewards for their family) and Children (view and complete tasks).
   - Role-Based UI Components: Display views and options based on user roles (Parent/Child).

2. **Backend**:
   - Framework: Node.js with Express for building scalable APIs.
   - Tenant-Aware Middleware: Inject `tenant_id` from the authenticated user’s JWT into every API request to scope data.
   - Multi-Tenant Services: User, Task, Reward, and Proof Management with tenant isolation.

3. **Database**:
   - PostgreSQL with a shared schema.
   - Tenant Isolation via a `tenant_id` column in all core tables (e.g., Users, Tasks, Rewards).
   - Index Optimization: Index `tenant_id` for fast querying across tenants.

4. **Authentication and Tenant Management**:
   - Authentication: Firebase Auth or Auth0 with JWT tokens extended to include `tenant_id` and `role`.
   - Tenant Management: API to onboard tenants, link users to tenants, and manage tenant-specific configurations.

5. **Data Storage**:
   - Proofs (e.g., photos/videos) stored in AWS S3 using tenant-specific folders (e.g., `s3://yourapp/{tenant_id}/proofs/`).

