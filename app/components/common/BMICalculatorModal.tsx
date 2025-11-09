'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Activity, TrendingUp, Info } from 'lucide-react';
import { Header3, Header5, Body1, Body2 } from '../common/typography';
import PrimaryButton from '../common/buttons/PrimaryButton';

/**
 * BMI Calculator Modal Component
 * Features:
 * - Calculate BMI based on height and weight
 * - Show BMI category and health recommendations
 * - Responsive design matching brand theme
 * - Smooth animations
 */

interface BMICalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BMIResult {
  bmi: number;
  category: string;
  description: string;
  color: string;
  recommendation: string;
}

export default function BMICalculatorModal({ isOpen, onClose }: BMICalculatorModalProps) {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      return;
    }

    let bmi: number;

    if (unit === 'metric') {
      // BMI = weight (kg) / (height (m))^2
      const heightInMeters = h / 100;
      bmi = w / (heightInMeters * heightInMeters);
    } else {
      // BMI = (weight (lbs) / (height (inches))^2) * 703
      bmi = (w / (h * h)) * 703;
    }

    // Determine category
    let category = '';
    let description = '';
    let color = '';
    let recommendation = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      description = 'Below healthy weight range';
      color = 'text-blue-600';
      recommendation = 'Consider consulting with a healthcare provider about healthy weight gain strategies.';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Healthy Weight';
      description = 'Within healthy weight range';
      color = 'text-green-600';
      recommendation = 'Great! Maintain your current lifestyle with balanced nutrition and regular exercise.';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      description = 'Above healthy weight range';
      color = 'text-orange-600';
      recommendation = 'Consider our medical weight loss program for personalized, doctor-led support.';
    } else {
      category = 'Obese';
      description = 'Significantly above healthy weight range';
      color = 'text-red-600';
      recommendation = 'Our medical weight loss program can help. Talk to our doctors about personalized treatment options.';
    }

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      description,
      color,
      recommendation,
    });
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setResult(null);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <div
              className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-brand-primary text-white px-6 sm:px-8 py-6 rounded-t-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <Header3 className="text-white !font-semibold">BMI Calculator</Header3>
                    <Body2 className="text-white/90">Calculate your Body Mass Index</Body2>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 sm:px-8 py-8 space-y-6">
                {/* Unit Toggle */}
                <div className="flex gap-2 bg-brand-neutral-light rounded-full p-1">
                  <button
                    onClick={() => {
                      setUnit('metric');
                      handleReset();
                    }}
                    className={`flex-1 py-2 px-4 rounded-full font-medium transition-all ${
                      unit === 'metric'
                        ? 'bg-brand-primary text-white shadow-md'
                        : 'text-brand-steel hover:text-brand-primary'
                    }`}
                  >
                    Metric (kg, cm)
                  </button>
                  <button
                    onClick={() => {
                      setUnit('imperial');
                      handleReset();
                    }}
                    className={`flex-1 py-2 px-4 rounded-full font-medium transition-all ${
                      unit === 'imperial'
                        ? 'bg-brand-primary text-white shadow-md'
                        : 'text-brand-steel hover:text-brand-primary'
                    }`}
                  >
                    Imperial (lbs, in)
                  </button>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-brand-dark font-medium mb-2">
                      Height {unit === 'metric' ? '(cm)' : '(inches)'}
                    </label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder={unit === 'metric' ? '170' : '67'}
                      className="w-full px-4 py-3 border-2 border-brand-neutral rounded-xl focus:border-brand-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-dark font-medium mb-2">
                      Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
                    </label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder={unit === 'metric' ? '70' : '154'}
                      className="w-full px-4 py-3 border-2 border-brand-neutral rounded-xl focus:border-brand-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Calculate Button */}
                <PrimaryButton
                  onClick={calculateBMI}
                  fullWidth
                  size="large"
                  disabled={!height || !weight}
                  className="!rounded-xl"
                >
                  Calculate BMI
                </PrimaryButton>

                {/* Results */}
                <AnimatePresence>
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* BMI Score */}
                      <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl p-6 text-center">
                        <Body2 className="text-brand-steel mb-2">Your BMI</Body2>
                        <div className="flex items-center justify-center gap-2">
                          <TrendingUp className={`w-8 h-8 ${result.color}`} />
                          <span className={`text-5xl font-bold ${result.color}`}>
                            {result.bmi}
                          </span>
                        </div>
                        <Header5 className={`mt-3 ${result.color}`}>{result.category}</Header5>
                        <Body2 className="text-brand-steel mt-1">{result.description}</Body2>
                      </div>

                      {/* BMI Scale Reference */}
                      <div className="bg-brand-neutral-light rounded-2xl p-4">
                        <div className="flex items-start gap-2 mb-3">
                          <Info className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <Body2 className="text-brand-dark font-medium">BMI Categories</Body2>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-brand-steel">Underweight</span>
                            <span className="text-blue-600 font-medium">&lt; 18.5</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-brand-steel">Healthy Weight</span>
                            <span className="text-green-600 font-medium">18.5 - 24.9</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-brand-steel">Overweight</span>
                            <span className="text-orange-600 font-medium">25 - 29.9</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-brand-steel">Obese</span>
                            <span className="text-red-600 font-medium">≥ 30</span>
                          </div>
                        </div>
                      </div>

                      {/* Recommendation */}
                      <div className="bg-brand-sage rounded-2xl p-6">
                        <Header5 className="text-brand-dark mb-3">Recommendation</Header5>
                        <Body2 className="text-brand-steel leading-relaxed mb-4">
                          {result.recommendation}
                        </Body2>
                        {(result.bmi >= 25) && (
                          <PrimaryButton
                            onClick={() => {
                              handleClose();
                              window.location.href = '/get-started';
                            }}
                            fullWidth
                            className="!rounded-xl"
                          >
                            Start Your Journey at $269/month →
                          </PrimaryButton>
                        )}
                      </div>

                      {/* Reset Button */}
                      <button
                        onClick={handleReset}
                        className="w-full py-3 text-brand-primary font-medium hover:text-brand-primary-dark transition-colors"
                      >
                        Calculate Again
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Info Note */}
                {!result && (
                  <div className="bg-brand-neutral-light rounded-xl p-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <Body2 className="text-brand-steel">
                      BMI is a screening tool and should not be used as a diagnostic tool. Consult with
                      our healthcare professionals for personalized health advice.
                    </Body2>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

