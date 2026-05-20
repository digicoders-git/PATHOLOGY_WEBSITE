# Registration Page — Complete API Documentation

> Base URL: `https://pathology-backend-2swf.onrender.com`

---

## 1. GET Test Services

Used in both **Individual** and **Parent** registration forms to populate the test selection list.

```bash
curl -X GET "https://pathology-backend-2swf.onrender.com/test-service/get?limit=1000&status=true"
```

**Query Params:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `limit` | number | ❌ | Max results to fetch (use `1000` to get all) |
| `status` | boolean | ❌ | `true` = active tests only |

**Sample Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "69c663cda6a17c490c1b4c3e",
      "title": "Liver Function Test (LFT)",
      "test_code": "LFT-001",
      "status": true,
      "is_featured": true,
      "category_id": {
        "_id": "69c6662ba6a17c490c1b4ccb",
        "name": "Heart Tests"
      },
      "mrp": 800,
      "price": 599,
      "sample_type": "Serum",
      "report_time": "24 Hours",
      "short_description": "Evaluates liver health and detects liver diseases.",
      "overview": "LFT checks enzymes and proteins produced by the liver to assess its function.",
      "purpose": ["Diagnosis liver function deasese"],
      "test_method": "Spectrophotometry",
      "fasting_required": true,
      "fasting_hours": 8,
      "precautions_before": ["8-12 hours fasting"],
      "precautions_during": "Blood is collected from a vein after proper fasting.",
      "precautions_after": ["normal activity"],
      "instruction_text": "Do not eat or drink anything except water for 8 hours before the test.",
      "test_components": [
        { "name": "ALT", "detail": "Measure", "_id": "69d7a3d11702c762fbadc4d4" }
      ],
      "createdAt": "2026-03-27T11:02:37.884Z",
      "updatedAt": "2026-04-09T13:08:47.460Z"
    }
  ],
  "pagination": {
    "total": 8,
    "page": 1,
    "limit": 1000,
    "totalPages": 1
  }
}
```

---

## 2. GET Parents

Used only in **Parent Registration** form to populate the parent organization dropdown.

```bash
curl -X GET "https://pathology-backend-2swf.onrender.com/parent/get"
```

**Query Params:** None required

**Sample Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "69d75d102b06f13faaaef8d2",
      "name": "Appolo Pathology",
      "status": true,
      "registrationCount": 1,
      "createdAt": "2026-04-09T08:02:24.327Z",
      "updatedAt": "2026-04-09T08:02:24.327Z"
    },
    {
      "_id": "69be8f9c5ac626fbb2975729",
      "name": "Lalpath Pathology",
      "status": true,
      "registrationCount": 1,
      "createdAt": "2026-03-21T12:31:24.280Z"
    },
    {
      "_id": "6996d7b8ea614763624315e1",
      "name": "Dr. sharma ji",
      "status": true,
      "registrationCount": 2,
      "createdAt": "2026-02-19T09:28:24.643Z"
    }
  ],
  "pagination": {
    "total": 5,
    "page": 1,
    "limit": 50,
    "totalPages": 1
  }
}
```

---

## 3. Pincode Autofill (External API)

Triggered automatically when user enters a **6-digit pincode**. Auto-fills `city`, `state`, `areaName`.

```bash
curl -X GET "https://api.postalpincode.in/pincode/226016"
```

**Sample Response:**
```json
[
  {
    "Message": "Number of pincode(s) found:10",
    "Status": "Success",
    "PostOffice": [
      {
        "Name": "Indira Nagar (Lucknow)",
        "District": "Lucknow",
        "State": "Uttar Pradesh",
        "Block": "Lucknow",
        "Pincode": "226016"
      }
    ]
  }
]
```

**Field Mapping:**

| API Field | Form Field |
|-----------|------------|
| `PostOffice[0].District` | `city` |
| `PostOffice[0].State` | `state` |
| `PostOffice[0].Block` | `areaName` |

---

## 4. Create Registration — Individual Lab

```bash
curl -X POST "https://pathology-backend-2swf.onrender.com/registrations/create" \
  -F "labName=My Pathology Lab" \
  -F "labType=Pathology" \
  -F "registrationNumber=REG123456" \
  -F "phone=9876543210" \
  -F "email=lab@example.com" \
  -F "ownerName=Dr. Sharma" \
  -F "password=mypassword123" \
  -F "fullAddress=123 Main Street, Medical Complex" \
  -F "areaName=Indira Nagar" \
  -F "city=Lucknow" \
  -F "state=Uttar Pradesh" \
  -F "pincode=226016" \
  -F "establishmentYear=2015" \
  -F "description=Leading diagnostic services" \
  -F "whatsapp=9876543210" \
  -F "ownerPhone=9876543211" \
  -F "ownerEmail=owner@example.com" \
  -F "latitude=26.9047" \
  -F "longitude=80.9495" \
  -F "homeCollection=true" \
  -F "is24x7=false" \
  -F "emergency=true" \
  -F "ambulanceService=false" \
  -F "openTime=08:00" \
  -F "closeTime=20:00" \
  -F "weeklyOff=Sunday" \
  -F "upiId=lab@upi" \
  -F "bankName=State Bank of India" \
  -F "accountNumber=1234567890" \
  -F "ifscCode=SBIN0001234" \
  -F "nabl=true" \
  -F "status=true" \
  -F "source=website" \
  -F "selectedTests=[\"69c663cda6a17c490c1b4c3e\",\"69c663cda6a17c490c1b4c3c\"]" \
  -F "test=[{\"name\":\"69c663cda6a17c490c1b4c3e\",\"price\":2000,\"discountPercent\":10,\"discountPrice\":1800}]" \
  -F "Certification=[{\"name\":\"NABL (ISO 15189 / ISO/IEC 17025)\"},{\"name\":\"NABH (Diagnostic Quality & Safety)\"}]" \
  -F "labLogo=@/path/to/logo.png" \
  -F "labBanner=@/path/to/banner.jpg" \
  -F "pathologyDocs=@/path/to/license.pdf"
```

**All Form Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `labName` | string | ✅ | Lab registered name |
| `labType` | string | ✅ | `Pathology` / `Diagnostic Center` / `Radiology` |
| `registrationNumber` | string | ✅ | Govt registration number |
| `phone` | string | ✅ | 10-digit phone (must be unique) |
| `email` | string | ✅ | Email address (must be unique) |
| `ownerName` | string | ✅ | Owner full name |
| `password` | string | ✅ | Min 6 characters |
| `fullAddress` | string | ✅ | Complete address |
| `areaName` | string | ✅ | Local area / locality |
| `city` | string | ✅ | City / District |
| `state` | string | ✅ | State / Province |
| `pincode` | string | ✅ | 6-digit pincode |
| `establishmentYear` | number | ❌ | e.g. `2015` |
| `description` | string | ❌ | Lab description / bio |
| `whatsapp` | string | ❌ | WhatsApp number |
| `ownerPhone` | string | ❌ | Owner personal phone |
| `ownerEmail` | string | ❌ | Owner personal email |
| `latitude` | number | ❌ | GPS latitude e.g. `26.9047` |
| `longitude` | number | ❌ | GPS longitude e.g. `80.9495` |
| `homeCollection` | boolean | ❌ | `true` / `false` |
| `is24x7` | boolean | ❌ | `true` / `false` |
| `emergency` | boolean | ❌ | `true` / `false` |
| `ambulanceService` | boolean | ❌ | `true` / `false` |
| `openTime` | string | ❌ | e.g. `08:00` |
| `closeTime` | string | ❌ | e.g. `20:00` |
| `weeklyOff` | string | ❌ | e.g. `Sunday` / `None (Open All Week)` |
| `upiId` | string | ❌ | UPI payment ID |
| `bankName` | string | ❌ | Bank name |
| `accountNumber` | string | ❌ | Bank account number |
| `ifscCode` | string | ❌ | Bank IFSC code |
| `nabl` | boolean | ❌ | NABL certified `true` / `false` |
| `status` | boolean | ❌ | Default `true` |
| `source` | string | ❌ | `website` (auto-set) |
| `selectedTests` | JSON string | ❌ | Array of test `_id`s |
| `test` | JSON string | ❌ | Custom pricing array |
| `Certification` | JSON string | ❌ | Certifications array |
| `labLogo` | file | ❌ | Logo image file |
| `labBanner` | file | ❌ | Banner image file |
| `pathologyDocs` | file | ❌ | License / registration document |
| `nablCert` | file | ❌ | NABL certificate file |

**`selectedTests` format:**
```json
["69c663cda6a17c490c1b4c3e", "69c663cda6a17c490c1b4c3c"]
```

**`test` (custom pricing) format:**
```json
[
  {
    "name": "69c663cda6a17c490c1b4c3e",
    "price": 2000,
    "discountPercent": 10,
    "discountPrice": 1800
  }
]
```

**`Certification` format:**
```json
[
  { "name": "NABL (ISO 15189 / ISO/IEC 17025)" },
  { "name": "NABH (Diagnostic Quality & Safety)" }
]
```

**Success Response:**
```json
{
  "success": true,
  "message": "Registration submitted successfully",
  "data": {
    "_id": "69d754b12b06f13faaaef6f0",
    "labName": "My Pathology Lab",
    "labType": "Pathology",
    "phone": "9876543210",
    "email": "lab@example.com",
    "ownerName": "Dr. Sharma",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "status": true,
    "source": "website",
    "isFeatured": false,
    "createdAt": "2026-04-10T07:07:52.995Z"
  }
}
```

**Error Responses:**
```json
// Duplicate phone or email
{
  "success": false,
  "message": "Pathology already registered with this phone number or email"
}

// Validation error
{
  "success": false,
  "message": "Validation failed: labName is required, phone is required"
}
```

---

## 5. Create Registration — Parent Lab

Exact same as Individual — only difference is `parent` field is **required**.

```bash
curl -X POST "https://pathology-backend-2swf.onrender.com/registrations/create" \
  -F "parent=6996d7b8ea614763624315e1" \
  -F "labName=My Branch Lab" \
  -F "labType=Pathology" \
  -F "registrationNumber=REG789012" \
  -F "phone=9876543211" \
  -F "email=branch@example.com" \
  -F "ownerName=Dr. Rajesh Singh" \
  -F "password=branchpass123" \
  -F "fullAddress=456 Health Avenue, Medical District" \
  -F "areaName=Aliganj" \
  -F "city=Lucknow" \
  -F "state=Uttar Pradesh" \
  -F "pincode=226024" \
  -F "establishmentYear=2020" \
  -F "description=Branch of Dr. sharma ji network" \
  -F "whatsapp=9876543211" \
  -F "ownerPhone=9876543212" \
  -F "ownerEmail=rajesh@example.com" \
  -F "latitude=26.9047" \
  -F "longitude=80.9495" \
  -F "homeCollection=true" \
  -F "is24x7=false" \
  -F "emergency=false" \
  -F "ambulanceService=false" \
  -F "openTime=09:00" \
  -F "closeTime=19:00" \
  -F "weeklyOff=Sunday" \
  -F "status=true" \
  -F "source=website" \
  -F "Certification=[{\"name\":\"NABL (ISO 15189 / ISO/IEC 17025)\"}]"
```

**Extra Field (Required for Parent):**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `parent` | string | ✅ | Parent `_id` from `GET /parent/get` |

**Success Response:**
```json
{
  "success": true,
  "message": "Registration submitted successfully",
  "data": {
    "_id": "69d8a1c80794ad2c8c93a88f",
    "labName": "My Branch Lab",
    "parent": "6996d7b8ea614763624315e1",
    "labType": "Pathology",
    "phone": "9876543211",
    "email": "branch@example.com",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "status": true,
    "source": "website",
    "createdAt": "2026-04-10T07:07:52.995Z"
  }
}
```

---

## Summary Table

| # | API | Method | Endpoint | Auth | Used In |
|---|-----|--------|----------|------|---------|
| 1 | Get Test Services | GET | `/test-service/get?limit=1000&status=true` | ❌ Public | Both forms |
| 2 | Get Parents | GET | `/parent/get` | ❌ Public | Parent form only |
| 3 | Pincode Autofill | GET | `https://api.postalpincode.in/pincode/:pin` | ❌ Public | Both forms |
| 4 | Create Individual Lab | POST | `/registrations/create` | ❌ Public | Individual form |
| 5 | Create Parent Lab | POST | `/registrations/create` | ❌ Public | Parent form |

---

## Key Differences: Individual vs Parent

| Feature | Individual | Parent |
|---------|-----------|--------|
| `parent` field | ❌ Not sent | ✅ Required (Parent `_id`) |
| Extra API call | None | `GET /parent/get` for dropdown |
| Registration type | Standalone lab | Branch under a parent org |
