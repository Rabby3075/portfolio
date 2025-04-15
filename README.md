# 🧠 Lung Cancer Classification using Multi-Resolution CNN with Knowledge Transfer

This repository contains the codebase and experimental results for our research on **Lung Cancer Classification using CT scan images**. We propose a **multi-resolution convolutional neural network (CNN)** architecture with **knowledge transfer and hyperparameter tuning** to improve early lung cancer diagnosis.

> 🚀 Achieved up to **93.5% classification accuracy** using a tuned ResNet50 model.

## 📄 Research Paper

A complete description of the methodology and evaluation is available in our published research paper:  
**Multi-Resolution CNN with Knowledge Transfer for Enhanced Lung Cancer Classification from CT Scans**  
> 📄 [Read the full paper (PDF)](link_to_pdf_or_repo_if_shared)

---

## 📁 Project Structure

---

## 🧠 Key Features

- ✅ Applied 3 CNN-based models: **Basic CNN**, **ResNet50**, and **InceptionV3**
- ⚙️ Applied **Random Search** hyperparameter tuning
- 🔍 Implemented **data preprocessing**, **model evaluation**, and **comparative analysis**
- 📊 Evaluated with **accuracy**, **precision**, **recall**, **F1-score**, and **ROC AUC**
- 📈 Visualized training metrics and confusion matrices for all models

---

## 📚 Dataset

- **Source**: [LIDC-IDRI (Lung Image Database Consortium)](https://wiki.cancerimagingarchive.net/display/Public/LIDC-IDRI)
- **Size**: 1000 CT scan images resized from 28×28 to 75×75
- **Labels**: Binary classification — `Benign` or `Malignant`

---

## 🔬 Methodology Overview

### 1. Preprocessing

- Grayscale conversion (if needed)
- Resizing to 75×75
- Normalization (0 to 1 pixel scaling)

### 2. Train-Test Split

- 80% for training, 20% for testing

### 3. Model Training

| Model         | Accuracy (Before) | Accuracy (After Tuning) |
|---------------|------------------|--------------------------|
| CNN           | 84%              | 88.5%                   |
| ResNet50      | 90%              | **93.5%**               |
| InceptionV3   | 89%              | 92.46%                  |

> Tuned ResNet50 showed the best performance.

### 4. Evaluation Metrics

- Accuracy
- Precision
- Recall
- F1-score
- ROC Curve and AUC
- Confusion Matrix

---

## 📈 Results

### 🔹 Tuned ResNet50 (Best Performing)

- ✅ Accuracy: **93.5%**
- ✅ Precision: 0.95
- ✅ Recall: 0.85
- ✅ F1 Score: 0.90
- ✅ AUC: 0.95

> ✔️ Demonstrated strong generalization and discriminative ability in classifying lung cancer CT scans.

---

## 🛠️ Dependencies

- Python 3.x
- NumPy
- Pandas
- TensorFlow / Keras
- Scikit-learn
- Matplotlib / Seaborn
- OpenCV (optional for image processing)

```bash
pip install -r requirements.txt
